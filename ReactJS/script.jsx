import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   render(){
      return(
         <div>

               <h1>{this.props.text}</h1>
         </div>
         );
   }
}
App.propTypes = {
   text: React.propTypes.string,
   cat: React.propTypes.number.isRequired
}
App.defaultProps = {
   text: "This is a default text"
}
ReactDOM.render(
      <App cat={5} text= "This is a props text" />, document.getElementById('content')
   );










