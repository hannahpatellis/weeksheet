import React from 'react';

import AppLogo from '../../assets/svg/receipt.svg';
import UserIcon from '../../assets/svg/user-circle.svg';
import AddIcon from '../../assets/svg/plus-circle.svg';

const TitleBar = () => {
	return (
		<header className='titleBar'>
			<div className='titleBar-appName'>
        <img src={AppLogo} alt='Weeksheet' />
      </div>
      <div className='titleBar-icons'>
        <img 
          className='titleBar-userIcon' 
          src={UserIcon} 
          alt='User Settings' />
        <img 
          className='titleBar-addIcon'
          src={AddIcon}
          alt='Add a Simple Note' />
      </div>
		</header>
	);
}

export default TitleBar;
