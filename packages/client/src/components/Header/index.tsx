import React from 'react';
import PokemonLogo from '@/assets/pokemon';
//@ts-ignore
import style from './index.less';


interface IHeaderProps {}

//@ts-ignore
const Header: React.FC<IHeaderProps> = props => {
  return (
    <div>
      <div>
        <PokemonLogo />
      </div>
    </div>
  );
};

export default Header;
