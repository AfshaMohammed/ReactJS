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
	constructor(props){
	super(props)
	this.state = {
		firstName : 'Afsha',
		lastName : 'Mohammed'
	}
}
	render(){
	setTimeout(() => {this.setState({firstName: 'Raghava', lastName: 'Ammisetty'})},5000);
		return(
		<div>
			<h1>Footer</h1>
			<p>My full name is {this.state.firstName} {this.state.lastName}</p>
		</div>
		);
	}
}

class Validations extends React.Component{
	render(){
	   return(
		<div>   
		    <h1>Props Validations</h1>
			<p>Array: {this.props.propArray}</p>
			<p>Boolean: {this.props.propBool ? "true..." : "false.."}</p>
			<p>Number: {this.props.propNumber}</p>
			<p>String: {this.props.propString}</p>
			<p>Object: {this.props.propObject}</p>
			<p>Function: {this.props.propFunc(5)}</p>
		</div>
	 );
	}
}
Validations.proprTypes = {
	propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}
Validations.defaultProps = {
	propArray: [1,2,3,4],
	propBool: true,
	propNumber: 2,
	propString: 'Apple',
	propFunc: function(a){return a},
	propObject: {
			name: 'Afsha',
			Age: 25,
			gender: 'female'
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
