import Filters from '@/components/Filters';
import Header from '@/components/Header';
import Panel from '@/components/Panel';
import { Pagination, Table, List, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import style from './style/index.less';
import { GET_POKEMONS } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { ColumnProps } from 'antd/lib/table';
import { zeroPad } from '@/helpers';
import PokemonType from '@/components/PokemonType';

interface OwnProps {}

const columns: ColumnProps<IEdge>[] = [
  {
    title: '',
    dataIndex: 'cursor',
    key: 'cursor',
    render: (value: string) => <div className={style['idx-counter']}>#{value}</div>,
  },
  {
    title: formatMessage({ id: 'pages.name' }),
    dataIndex: 'node.name',
    key: 'node.name',
    render: (value: string) => <a onClick={() => true}>{value}</a>,
  },
  {
    title: formatMessage({ id: 'pages.classification' }),
    dataIndex: 'node.classification',
    key: 'node.classification',
  },
  {
    title: formatMessage({ id: 'pages.type' }),
    dataIndex: 'node.types',
    key: 'node.types',
    render: (value: string[]) => <span>{value.map(type => type)}</span>,
  },
];

/**
 * This page show the basic page in order filter and view all pokemons
 *
 * @param props
 */
//@ts-ignore
const SearchPage: React.FC<OwnProps> = props => {
  const response = useQuery<IPokemons>(GET_POKEMONS).data;

  //@ts-ignore
  const [data, setData] = useState<IPokemons>(response);

  const [selected, setSelected] = useState<IEdge>();

  console.log('response: ', useQuery<IPokemons>(GET_POKEMONS));

  useEffect(() => {});

  return (
    <div className={style['search-page']}>
      <div className={style['left-panel']}>
        {/* Left panel */}

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div>
            <Header />
          </div>

          <div className={style['filter-container']}>
            <Filters />
          </div>

          <div style={{ flex: '1' }}>
            <Table
              onRow={(record: IEdge) => {
                return {
                  onClick: () => setSelected(record),
                };
              }}
              pagination={false}
              size={'default'}
              dataSource={response?.pokemons.edges}
              columns={columns}
            />
          </div>

          <div>
            <Pagination simple defaultCurrent={2} total={50} />
          </div>
        </div>
      </div>

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
