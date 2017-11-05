
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   render(){
      return(
            <h1>{this.props.text}</h1>
         );
   }
}
ReactDOM.render(
      <App text= "Hello! Welcome..."/>, document.getElementById('content')
   );





















