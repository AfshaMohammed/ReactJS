import React from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component{
   constructor(){
      super();
      this.state = {
         data: 'Initial data...!'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e){
      this.setState({data: 'Data updated...!'});
   }


   render(){
      return(
         <div>
            <button onClick={this.updateState}>Click to update</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
ReactDOM.render(
   <Forms/>, document.getElementById('content')
);
