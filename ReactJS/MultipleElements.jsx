import React from 'react';
import ReactDOM from 'react-dom';

class MyMain extends React.Component{
	render: function(){
		return(
		<div>
			<H1>This is my main component</h1>
		</div>
		);
	}
}
ReactDOM.render(
	<My-Main>, document.getElementById('WebPage')
);