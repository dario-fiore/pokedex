import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { formatMessage } from 'umi-plugin-react/locale';
import style from './style/index.less';

/**
 * Column definition
 */
export const columns: ColumnProps<IEdge>[] = [
  {
    width: 100,
    dataIndex: 'cursor',
    key: 'cursor',
    render: (value: string) => <div className={style['idx-counter']}>#{value}</div>,
  },
  {
    title: <span className={style['table-header']}>{formatMessage({ id: 'pages.name' })}</span>,
    dataIndex: 'node.name',
    key: 'node.name',
    width: 150,
    render: (value: string) => <a onClick={() => true}>{value}</a>,
  },
  {
    width: 250,
    title: (
      <span className={style['table-header']}>{formatMessage({ id: 'pages.classification' })}</span>
    ),
    dataIndex: 'node.classification',
    key: 'node.classification',
  },
  {
    width: 250,
    title: <span className={style['table-header']}>{formatMessage({ id: 'pages.type' })}</span>,
    dataIndex: 'node.types',
    key: 'node.types',
    render: (value: string[]) =>
      value.map(type => <span className={style['separated-list']}>{type}</span>),
  },
];
