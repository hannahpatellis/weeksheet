import React from 'react';
import ContentEditable from 'react-contenteditable';

import TrashIcon from '../../assets/svg/trash.svg';
import PlusIcon from '../../assets/svg/plus.svg';

const SimpleNoteHeader = React.forwardRef((props, ref) => {
  let p = props;
	return (
		<div className='simpleNote'>
      <div className='simpleNote-title'>
        <ContentEditable
          innerRef={ref}
          html={p.html}
          disabled={false}
          onChange={p.onChange}
          tagName='div' />
      </div>
      
      <div className='simpleNote-icons'>
        <img 
          className='simpleNote-trash' 
          src={TrashIcon} 
          alt='Delete This Note' />
        <img 
          className='simpleNote-plus' 
          src={PlusIcon} 
          alt='Expand This Note' />
      </div>
    </div>
	);
});

export default SimpleNoteHeader;
