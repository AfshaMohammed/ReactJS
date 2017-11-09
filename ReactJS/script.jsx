import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
   render(){
      return(
            <Title text='1234561' />
         );
   }
}
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
   text(props, propName, component){
      if(!(propName in props)){
         return new Error("missing ${propName}")
      }
      if(props[propName].length < 5 ){
         return new Error("${propName} was too short!")
      }
   }
}
ReactDOM.render(
      <App />, document.getElementById('content')
   );
