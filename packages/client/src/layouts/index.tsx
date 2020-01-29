import React from 'react';
import style from './index.less';

interface OwnProps{
  
}

const BasicLayout: React.FC<OwnProps> = props => {
  return (
    <div className={style["main-page-wrapper"]}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
