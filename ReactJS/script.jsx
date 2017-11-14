import React from 'react';
import ReactDOM from 'react-dom';
 

class App extends React.Component{
   constructor(){
      super();
      this.state = {
         data: "My data is "
      }

   }
   update(e){
      this.setState({data: e.target.value})
   }
   render(){
      return(
            <div>
               <h1>{this.state.data}</h1>
               <Header update={this.update.bind(this)} />
               <Header update={this.update.bind(this)} />
               <Header update={this.update.bind(this)} />
               <Header update={this.update.bind(this)} />
            </div>
         )
   }
}
const Header = (props) => <input type="text" onChange={props.update} />
ReactDOM.render(
      <App />, document.getElementById('content')
   );










