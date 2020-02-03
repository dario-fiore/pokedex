import React, { Suspense } from 'react';
import style from './index.less';

interface IPokemonTypeProps {
  /***
   * Type of pokemon
   */
  icon: PokemonType;

  /**
   * Dimension of badge
   */
  size?: number;
}

type IconTypeMap = Record<PokemonType, { color: string; image: string }>;

const typeToIconMap: IconTypeMap = {
  Bug: { color: '#74515C', image: 'bug' },
  Ground: { color: '#917464', image: 'crack' },
  Dragon: { color: '#448B95', image: 'dragon' },
  Electric: { color: '#E2E32F', image: 'electric' },
  Water: { color: '#0F7199', image: 'water' },
  Ice: { color: '#0F7199', image: 'snow' },
  Normal: { color: '#73525B', image: 'normal' },
  Fairy: { color: '#741DCA', image: 'fairy' },
  Fighting: { color: '#994025', image: 'fighting' },
  Fire: { color: '#AA1F23', image: 'fire' },
  Flying: { color: '#4A677D', image: 'fly' },
  Grass: { color: '#1A4925', image: 'leaf' },
  Poison: { color: '#9969D7', image: 'poison' },
  Psychic: { color: '#A02B6D', image: 'eye' },
  Rock: { color: '#58575E', image: 'rock' },
  Dark: { color: '#040706', image: 'moon' },
  Steel: { color: '#5F756D', image: 'hook' },
};

/**
 * This component allow to render respective "badge icon" for each pokemon type. It load dynamically and on-demand predefined icon
 * @param props
 */
const PokemonType: React.FC<IPokemonTypeProps> = props => {
  const { size, icon } = props;

  const Icon = React.lazy(() => import(`../../assets/${typeToIconMap[icon].image}`));

  return (
    <div
      style={{ backgroundColor: typeToIconMap[icon].color, width: size, height: size }}
      className={style['pokemon-type-component']}
    >
      <Suspense
        fallback={
          <div style={{ backgroundColor: '#eee' }} className={style['pokemon-type-component']} />
        }
      >
        <Icon />
      </Suspense>
    </div>
  );
};

export default PokemonType;
