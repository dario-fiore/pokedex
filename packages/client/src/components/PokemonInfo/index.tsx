import React from 'react';
import style from './index.less';
import Panel from '../Panel';
import { Tooltip } from 'antd';
import PokemonType from '@/components/PokemonType';
import { formatMessage } from 'umi-plugin-react/locale';

interface IPokemonInfoProps {
  item?: IEdge;
}

const PokemonInfo: React.FC<IPokemonInfoProps> = props => {
  const { item } = props;
  return (
    <Panel
      content={
        <div className={style['pokemon-container']}>
          <div className={style['image-container']}>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item?.node.id}.png`}
            />
          </div>

          <div className={style.title}>
            <span>{item?.node.name}</span>
          </div>

          <div className={style.type}>
            {item?.node.types.map(type => {
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
                {item?.node.types.map(type => (
                  <span className={style['title']}>{type}</span>
                ))}
              </div>
              <div>
                <span>{formatMessage({ id: 'pages.type' })}</span>
              </div>
            </div>
            <div>
              <div>
                <span className={style['title']}>{item?.node.weight.maximum}</span>
              </div>
              <div>
                <span>{formatMessage({ id: 'pages.weight' })}</span>
              </div>
            </div>
            <div>
              <div>
                <span className={style['title']}>{item?.node.height.maximum}</span>
              </div>
              <div>
                <span>{formatMessage({ id: 'pages.height' })}</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PokemonInfo;
