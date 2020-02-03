import React from 'react';
import Panel from '../Panel';
import { formatMessage } from 'umi-plugin-react/locale';
import style from './index.less';
import { zeroPad } from '@/helpers';

interface IPokemonEvolutions {
  /**
   * Pokemon evolutions array
   */
  evolutions: IEvolution[];
}

/**
 * This component allow to show pokemon evolutions. Informations are encapuslated in a <Panel/> component
 * @param props
 */
const PokemonEvolutions: React.FC<IPokemonEvolutions> = props => {
  const { evolutions } = props;
  return (
    <Panel
      title={formatMessage({ id: 'pages.evolutions' })}
      content={
        <div className={style['pokemon-image-container']}>
          {evolutions.map(evolution => {
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
  );
};

export default PokemonEvolutions;
