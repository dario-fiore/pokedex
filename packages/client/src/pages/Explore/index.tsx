import Filters from '@/components/Filters';
import Header from '@/components/Header';
import Panel from '@/components/Panel';
import PokemonType from '@/components/PokemonType';
import { zeroPad } from '@/helpers';
import { useQuery } from '@apollo/react-hooks';
import { List, Table, Tooltip, Button } from 'antd';
import { isEmpty, omitBy } from 'lodash';
import React, { useState } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { columns } from './columns';
import { GET_POKEMONS } from './graphql/queries';
import { pokemonClassifications, pokemonTypes } from './helpers';
import style from './style/index.less';

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

  const [limit] = useState<number>(10);

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
            <Button
              onClick={() => setAfter(response?.pokemons.pageInfo.endCursor)}
              disabled={!response?.pokemons.pageInfo.hasNextPage}
              block={true}
              type="primary"
            >
              Load more...
            </Button>
          </div>
        </div>
      </div>
      {/* End Left panel */}

      <div className={style['right-panel']}>
        {/* Right panel */}
        <div className={style['detail-container']}>
          {/* Item 3 */}
          <div className={style.item}>
            <Panel
              content={
                <div className={style['pokemon-container']}>
                  <div className={style['image-container']}>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${selected?.node.id}.png`}
                    />
                  </div>

                  <div className={style.title}>
                    <span>{selected?.node.name}</span>
                  </div>

                  <div className={style.type}>
                    {selected?.node.types.map(type => {
                      return (
                        <Tooltip placement="bottom" title={type}>
                          <div>
                            <PokemonType size={38} icon={type} />
                          </div>
                        </Tooltip>
                      );
                    })}
                  </div>

                  <div className={style['information-container']}>
                    <div>
                      <div>
                        <span className={style['title']}>{selected?.node.types}</span>
                      </div>
                      <div>
                        <span>Type</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className={style['title']}>{selected?.node.weight.maximum}</span>
                      </div>
                      <div>
                        <span>Weight</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className={style['title']}>{selected?.node.height.maximum}</span>
                      </div>
                      <div>
                        <span>Height</span>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Item 1 */}
          <div className={style.item}>
            {selected?.node.evolutions && (
              <Panel
                title={formatMessage({ id: 'pages.evolutions' })}
                content={
                  <div className={style['pokemon-image-container']}>
                    {selected?.node.evolutions.map(evolution => {
                      return (
                        <div className={style['pokemon-image']}>
                          <div className={style['image-container']}>
                            <img
                              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeroPad(
                                evolution.id,
                                3,
                              )}.png`}
                            />
                          </div>
                          <div className={style['text-container']}>
                            <span>{evolution.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                }
              />
            )}
          </div>

          {/* Item 1 */}
          <div className={style.item}>
            <Panel
              title={formatMessage({ id: 'pages.attacks' })}
              content={
                <List
                  bordered={false}
                  dataSource={selected?.node.attacks.fast}
                  renderItem={item => (
                    <List.Item style={{ border: 'none' }}>
                      <div className={style['attack-container']}>
                        <Tooltip placement="left" title={item.type}>
                          <div>
                            <PokemonType icon={item.type} />
                          </div>
                        </Tooltip>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.damage}>{item.damage}</div>
                      </div>
                    </List.Item>
                  )}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
