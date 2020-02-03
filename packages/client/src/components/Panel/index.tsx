import React, { ReactNode } from 'react';
import style from './index.less';
import PokemonBall from '@/assets/pokeball';

interface OwnProps {
  /**
   * Title of panel
   */
  title?: string;

  /**
   * Main content of panel
   */
  content: ReactNode;
}

/**
 * Panel allow to compose a card with a given title and content.
 *
 * @param props
 */
const Panel: React.FC<OwnProps> = props => {
  return (
    <div className={style['panel-component']}>
      {props.title && (
        <div className={style.header}>
          <span className={style.icon}>
            <PokemonBall />
          </span>
          <span className={style.title}>{props.title}</span>
        </div>
      )}
      <div>{props.content}</div>
    </div>
  );
};

export default Panel;
