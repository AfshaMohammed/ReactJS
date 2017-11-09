import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
   render(){
      return(
            <button>I <Header /> React</button>
         );
   }
}
class Header extends React.Component{
   render(){
      return(
            <span>&hearts;</span>
         );
   }
}

ReactDOM.render(
      <App />, document.getElementById('content')
   );










