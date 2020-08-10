import React from 'react';
import ContentEditable from 'react-contenteditable';

import TitleBar from './TitleBar';
import SimpleNoteHeader from './SimpleNoteHeader';
 
class App extends React.Component {
  constructor() {
    super()
		this.contentEditable = React.createRef();
		this.contentEditable2 = React.createRef();
    this.state = {
			html1: "<b>Hello <i>World</i></b>",
			html2: "<b>Hello <i>World2</i></b>",
			ref1: React.createRef(),
			ref2: React.createRef()
		};
  };
 
  change1 = evt => {
    this.setState({html1: evt.target.value});
	};
	
	handleChange2 = evt => {
    this.setState({html2: evt.target.value});
  };
 
  render = () => {
		let s = this.state;
    return (
		<div>
			<TitleBar />
			<main>
				<div className='simpleNoteWrapper'>
					<SimpleNoteHeader
						ref={s.ref1}
						html={s.html1}
						onChange={this.change1}
					/>
				</div>
			</main>
			{/* <ContentEditable
              innerRef={this.state.ref1}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />
						<ContentEditable
              innerRef={this.state.ref2}
              html={this.state.html2} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange2} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            /> */}
						</div>)
  };
};

export default App;