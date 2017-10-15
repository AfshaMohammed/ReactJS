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
		setTimeout(()=> {this.setState({firstName: 'Raghava', lastName:'Ammisetty'})},4000);
		return(
		<div>
			<h1>Footer</h1>
			<p>My full name is {this.state.firstName} {this.state.lastName}</p>
			</div>
		);
	}
}



class MyComponent extends React.Component{
	 constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
     
      this.setState({data: this.state.data+item})
   };
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
				
				<button onClick={this.setStateHandler}>Set State </button>
		<p>State Array: {this.state.data}</p>
			</div>
		);
	}
}
ReactDOM.render(
	<MyComponent/>, document.getElementById('content')
);
