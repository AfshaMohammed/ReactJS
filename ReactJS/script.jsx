
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   render(){
      return React.createElement('h1', null, 'Hello World!')
   }
}

ReactDOM.render(
   <App />, document.getElementById('content')
   );














