import { Col, Input, Row, Select } from 'antd';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import style from './index.less';

interface IFiltersProps {
  classifications: Array<PokemonClassification>;
  types: Array<PokemonType>;
  onSearch: (filter: { [key: string]: string }) => void;
}

const { Search } = Input;

const { Option } = Select;

/**
 * This component show all available options in order to filter all available options
 *
 * @param props
 */

type FilterType = 'classification' | 'type' | 'name';

const Filters: React.FC<IFiltersProps> = props => {
  const onSearch = (value: string, key: FilterType) => {
    // const criteria = { [key]: value };
    // props.onSearch(_.omitBy(criteria, _.isNil));
    props.onSearch({ [key]: value });
  };

  return (
    <div className={style['filters-component']}>
      <Row type="flex" gutter={[16, 16]}>
        <Col span={8}>
          <Select
            onChange={(value: string) => onSearch(value, 'classification')}
            showSearch
            defaultValue=""
            style={{ width: '100%' }}
          >
            <Option value="">
              {formatMessage({ id: 'components.filters.allClassification' })}
            </Option>
            {props.classifications.map(classification => {
              return <Option value={classification}>{classification}</Option>;
            })}
          </Select>
        </Col>

        <Col span={8}>
          <Select
            onChange={(value: string) => onSearch(value, 'type')}
            showSearch
            defaultValue=""
            style={{ width: '100%' }}
          >
            <Option value="">{formatMessage({ id: 'components.filters.allTypes' })}</Option>
            {props.types.map(type => {
              return <Option value={type}>{type}</Option>;
            })}
          </Select>
        </Col>

        <Col span={8}>
          <Search
            onSearch={(value: string) => onSearch(value, 'name')}
            enterButton
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
