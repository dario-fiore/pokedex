import React from 'react';
import Panel from '../Panel';
import { formatMessage } from 'umi-plugin-react/locale';
import { List, Tooltip } from 'antd';
import style from './index.less';

import PokemonType from '@/components/PokemonType';

interface IPokemonAttacksProps {
  attacks?: IAttacks;
}

const PokemonAttacks: React.FC<IPokemonAttacksProps> = props => {
  const { attacks } = props;
  return (
    <Panel
      title={formatMessage({ id: 'pages.attacks' })}
      content={
        <List
          bordered={false}
          dataSource={attacks ? attacks.fast : []}
          renderItem={item => (
            <List.Item style={{ border: 'none' }}>
              <div className={style['attack-container']}>
                <Tooltip placement="left" title={item.type}>
                  <div>
                    <PokemonType icon={item.type} />
                  </div>
                </Tooltip>
                <div className={style.name}>{item.name}</div>
                <div className={style.damage}>{item.damage}</div>
              </div>
            </List.Item>
          )}
        />
      }
    />
  );
};

export default PokemonAttacks;
