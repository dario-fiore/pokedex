import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { formatMessage } from 'umi-plugin-react/locale';
import style from './style/index.less';

/**
 * Column definition
 */
export const columns: ColumnProps<IEdge>[] = [
  {
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
