import React from 'react';
import ReactDOM from 'react-dom';
   

class App extends React.Component{
   constructor(){
      super();
      this.state = {
         data: '---'
      }
      this.update = this.update.bind(this)
      }
      update(e){
         this.setState({data: e.type})
      }

   render(){
      return(
            <div>
               <textarea onChange={this.update} onCopy={this.update} onCut={this.update} onPaste={this.update} onFocus={this.update} onDoubleClick={this.update} onBlur={this.update} col="50" row="30" />
               <h1>{this.state.data}</h1>
            </div>
         );
   }
}
ReactDOM.render(
      <App />, document.getElementById('content')
   );










