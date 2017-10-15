import React from 'react';
import ReactDOM from 'react-dom';

var styles = {color:'red'}
var styles1 = {backgroundColor: 'gray'}

class Header extends React.Component{
	render(){
		return(
		<div>
			<h1>Header</h1>
			<p>My Header name is : {this.props.name}</p>
		</div>
		);
	}
}

class Footer extends React.Component{
	render(){
		return(
		<div>
			<h1>Footer</h1>
			</div>
		);
	}
}

class MyComponent extends React.Component{
	render() {
		return(
			<div style={styles}>
				<h2 style={styles1}>Hello World!</h2>
				<h3>My First React JS program</h3>
				<p>Using Styles</p>
				<p>The sum of number is : {2+1}</p>
				<Header name="Afsha" />
				<Header name="Mohammed" />
				<Footer/>
			</div>
		);
	}
}
ReactDOM.render(
	<MyComponent/>, document.getElementById('content')
);