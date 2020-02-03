import React from 'react';
import style from './index.less';

/**
 * Basic layout page, used by UmiJS to encapsulate all pages
 */
const BasicLayout: React.FC = props => {
  return <div className={style['main-page-wrapper']}>{props.children}</div>;
};

export default BasicLayout;
