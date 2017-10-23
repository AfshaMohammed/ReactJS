import React from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component{
   constructor(){
      super();
      this.state = {
         data: 'Update data...!'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e){
      this.setState({data: e.target.value});
   }


   render(){
      return(
         <div>
            <input type="text" value={this.state.data}
            onChange={this.updateState} />
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
ReactDOM.render(
   <Forms/>, document.getElementById('content')
);
