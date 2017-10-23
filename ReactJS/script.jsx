import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
      constructor(){
         super();
         this.state = {
            data: ''
         }
         this.updateState = this.updateState.bind(this);
         this.clearData = this.clearData.bind(this);
      }

      updateState(e){
         this.setState({data: e.target.value});
      }
      clearData(){
         this.setState({data: ''});
         ReactDOM.findDOMNode(this.refs.myInput).focus();
      }

   render(){
      return(
         <div>
            <input type="text" value={this.state.data} onChange={this.updateState} ref="myInput" />
            <button onClick={this.clearData}>Click</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
ReactDOM.render(
   <App/>, document.getElementById('content')
);
