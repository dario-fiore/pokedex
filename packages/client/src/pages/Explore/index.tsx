import Player from '@/assets/player';
import PokemonLogo from '@/assets/pokemon';
import Filters from '@/components/Filters';
import { useQuery } from '@apollo/react-hooks';
import { Button, Result, Table } from 'antd';
import { isEmpty, omitBy } from 'lodash';
import React, { useState } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { columns } from './columns';
import PokemonDetailPanel from './detail';
import { GET_POKEMONS } from './graphql/queries';
import { pokemonClassifications, pokemonTypes } from './helpers';
import style from './style/index.less';

const FILTER_QUERY_LIMIT = 9;

/**
 * This page show the basic page in order filter and view all pokemons
 *
 * @param props
 */
const Explore: React.FC = () => {
  /**
   * Filter variable hook
   */
  const [filter, setFilter] = useState<Partial<ISearchCriteria>>({});

  /**
   * Limit data hook
   */
  const [limit] = useState<number>(FILTER_QUERY_LIMIT);

  /**
   * Pagination hook
   */
  const [after, setAfter] = useState<any>(undefined);

  /**
   * Selected pokemon hook
   */
  const [selected, setSelected] = useState<IEdge>();

  const response = useQuery<IPokemons, Partial<IFilterVariable>>(GET_POKEMONS, {
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
            <PokemonLogo />
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

export default Explore;
