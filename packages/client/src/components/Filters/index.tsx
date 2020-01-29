import { Col, Row, Select, Input } from 'antd';
import React from 'react';
import style from './index.less';
import {formatMessage} from 'umi-plugin-react/locale';

interface IFiltersProps {}

const {Search} =Input;

const { Option } = Select;

/**
 * This component show all available options in order to filter all available options
 * 
 * @param props 
 */
//@ts-ignore
const Filters: React.FC<IFiltersProps> = props => {
  return (
    <div className={style['filters-component']}>
      <Row type="flex" gutter={[16, 16]}>
        <Col span={8}>
          <Select defaultValue="" style={{ width: '100%' }}>
            <Option value="">{formatMessage({ id:'components.filters.allClassification' })}</Option>
          </Select>
        </Col>

        <Col span={8}>
          <Select defaultValue="" style={{ width: '100%' }}>
            <Option value="">{formatMessage({ id:'components.filters.allTypes' })}</Option>
          </Select>
        </Col>

        <Col span={8}>
          <Search enterButton style={{ width: '100%' }} />
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
