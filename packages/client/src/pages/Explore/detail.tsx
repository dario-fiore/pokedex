import PokemonAttacks from '@/components/PokemonAttacks';
import PokemonEvolutions from '@/components/PokemonEvolutions';
import PokemonInfo from '@/components/PokemonInfo';
import { Result } from 'antd';
import React from 'react';
import style from './style/index.less';
import { formatMessage } from 'umi-plugin-react/locale';
import EmptyBall from '@/assets/emptyball';

interface OwnProps {
  /**
   * Selected pokemon item
   */
  selected?: IEdge;
}

/**
 * Pokemon detail right panel, it use memo in order to avoid re-render each time you use component of the left panel
 *
 * @param props
 */
const PokemonDetailPanel: React.FC<OwnProps> = props => {
  const { selected } = props;
  return (
    <div className={style['detail-container']}>
      {selected ? (
        <>
          {/* Pokemon main information panel */}
          <div className={style.item}>
            <PokemonInfo item={selected} />
          </div>

          {/* Pokemon evolutions container */}
          <div className={style.item}>
            {selected.node.evolutions && (
              <PokemonEvolutions evolutions={selected.node.evolutions} />
            )}
          </div>

          {/* Pokemon attacks container */}
          <div className={style.item}>
            <PokemonAttacks attacks={selected.node.attacks} />
          </div>
        </>
      ) : (
        <Result
          icon={<EmptyBall />}
          title={
            <span style={{ fontWeight: 300, color: '#9E9E9E', fontSize: '20px' }}>
              {formatMessage({ id: 'pages.selectPokemon' })}
            </span>
          }
        />
      )}
    </div>
  );
};

export default React.memo(PokemonDetailPanel);
