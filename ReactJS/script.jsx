import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   constructor(){
      super();
      this.state = {
         text: "This is a state text!"
      }
   }
   update(e){
      this.setState({text: e.target.value})
   }
   render(){
      return(
         <div>
               <input type="text" onChange={this.update.bind(this)} />
               <h1>{this.state.text}</h1>
         </div>
         );
   }
}

ReactDOM.render(
      <App />, document.getElementById('content')
   );










