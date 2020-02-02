import Filters from '@/components/Filters';
import Header from '@/components/Header';
import { useQuery } from '@apollo/react-hooks';
import { Button, Table, Result } from 'antd';
import { isEmpty, omitBy } from 'lodash';
import React, { useState } from 'react';
import { columns } from './columns';
import PokemonDetailPanel from './detail';
import { GET_POKEMONS } from './graphql/queries';
import { pokemonClassifications, pokemonTypes } from './helpers';
import style from './style/index.less';
import { formatMessage } from 'umi-plugin-react/locale';
import Player from '@/assets/player';

interface OwnProps {}

interface IVariable {
  filter: {
    name: string;
    type?: string;
    classification?: string;
  };
  after: number;
  limit: number;
}

/**
 * This page show the basic page in order filter and view all pokemons
 *
 * @param props
 */
//@ts-ignore
const SearchPage: React.FC<OwnProps> = props => {
  const [filter, setFilter] = useState<any>({});

  const [limit] = useState<number>(9);

  const [after, setAfter] = useState<any>(undefined);

  const [selected, setSelected] = useState<IEdge>();

  const response = useQuery<IPokemons, Partial<IVariable>>(GET_POKEMONS, {
    variables: { filter, limit, after },
  }).data;

  const onSearch = (incomingFilter: { [key: string]: string }) => {
    const criteria = { ...filter, ...incomingFilter };
    setFilter(omitBy(criteria, isEmpty));
    setAfter(undefined);
  };

  return (
    <div className={style['search-page']}>
      {/* Left panel */}
      <div className={style['left-panel']}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div>
            <Header />
          </div>

          <div className={style['filter-container']}>
            <Filters
              onSearch={onSearch}
              classifications={pokemonClassifications}
              types={pokemonTypes}
            />
          </div>

          {response && response?.pokemons.edges.length === 0 ? (
            <Result
              icon={<Player />}
              title={
                <span style={{ fontWeight: 300, color: '#9E9E9E', fontSize: '20px' }}>
                  {formatMessage({ id: 'pages.noPokemonFound' })}
                </span>
              }
            />
          ) : (
            <>
              <div style={{ flex: '1' }}>
                <Table
                  onRow={(record: IEdge) => {
                    return {
                      onClick: () => setSelected(record),
                    };
                  }}
                  pagination={false}
                  size={'middle'}
                  dataSource={response?.pokemons.edges}
                  columns={columns}
                />
              </div>

              <div className={style.footer}>
                {response?.pokemons.pageInfo.hasNextPage && (
                  <Button
                    onClick={() => setAfter(response?.pokemons.pageInfo.endCursor)}
                    block={true}
                    type="primary"
                  >
                    {formatMessage({ id: 'pages.loadMore' })}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {/* End Left panel */}

      <div className={style['right-panel']}>
        <PokemonDetailPanel selected={selected} />
      </div>
    </div>
  );
};

export default SearchPage;
