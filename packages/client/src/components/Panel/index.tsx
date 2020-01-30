import React, { ReactNode } from 'react';
import style from './index.less';
import PokemonBall from '@/assets/pokeball';

interface OwnProps {
  title?: string;
  content: ReactNode;
}

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
