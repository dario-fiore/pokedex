import Filters from '@/components/Filters';
import Header from '@/components/Header';
import { Table, Pagination } from 'antd';
import React from 'react';
import style from './style/index.less';
import Panel from '@/components/Panel';
import { formatMessage } from 'umi-plugin-react/locale';

interface OwnProps {}


const dataSource = [
  {
    key: '001',
    name: 'Pikachu',
    age: 'Seed Pokémon',
    address: 'Grass/Poison',
  },
  {
    key: '002',
    name: 'Pikachu',
    age: 'Seed Pokémon',
    address: 'Grass/Poison',
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
    render: (value:string) => <div className={style["idx-counter"]}>#{value}</div> 
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'CLASSIFICATION',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'TYPE',
    dataIndex: 'address',
    key: 'address',
  },
];


/**
 * This page show the basic page in order filter and view all pokemons
 *
 * @param props
 */
//@ts-ignore
const SearchPage: React.FC<OwnProps> = props => {
  return (
    <div className={style['search-page']}>
      <div className={style['left-panel']}>
       
     
        {/* Left panel */}

        <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
          <div>
            <Header />
          </div>
          
          <div className={style["filter-container"]}>
            <Filters />
          </div>

          <div style={{flex:'1'}}>
            <Table pagination={false} size={"default"} dataSource={dataSource} columns={columns} />
          </div>

          <div>
          <Pagination simple defaultCurrent={2} total={50} />
          </div>


        </div>


      </div>

      <div className={style['right-panel']}>

          {/* Right panel */}
          <div className={style["detail-container"]}>
           <div className={style.item}>
           <Panel title={formatMessage({id:'pages.evolutions'})} />
             </div>

             <div className={style.item}>
             <Panel title={formatMessage({id:'pages.attacks'})} />
             </div>
</div>
          

          

      </div>
    </div>
  );
};

export default SearchPage;
