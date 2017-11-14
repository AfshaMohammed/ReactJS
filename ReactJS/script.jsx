import React from 'react';
import ReactDOM from 'react-dom';
   


class App extends React.Component{
   constructor(){
      super();
      this.state = {
         currentEvent: "---"
      }
      this.update = this.update.bind(this);
   }
   update(e){
      this.setState({data: e.type})
   }

   render(){
      return(
         <div><textarea onKeyPress = {this.update} onCopy = {this.update} onCut = {this.update} onPaste = {this.update} 
         onFocus= {this.update} onBlur={this.update} col="30" row="30" />
           <h1>{this.state.currentEvent}</h1>
         </div>
           ); 
   }
}

ReactDOM.render(
      <App />, document.getElementById('content')
   );










