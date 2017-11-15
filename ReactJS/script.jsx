import React from 'react';
import ReactDOM from 'react-dom';
   

class App extends React.Component{
   constructor(){
      super();
      this.state = {
         a: ''
      }
      this.update = this.update.bind(this)
      }
      update(e){
         this.setState({a: this.refs.a.value,
                        b: this.refs.b.value,
                        c: this.refs.c.value})
         
      }

   render(){
      return(
            <div>
               FirstName: <input ref="a" type="text" placeholder="FirstName" onChange={this.update.bind(this)} />
               <h1>{this.state.a}</h1>
               <hr/>
               LastName: <input ref="b" type="text" placeholder="LastName" onChange={this.update.bind(this)} />
                <h1>{this.state.b}</h1>
                <hr/>
                EmailAddress: <input ref="c" type="text" placeholder="Email Address" onChange={this.update.bind(this)} />
                 <h1>{this.state.c}</h1>

            </div>

         );
   }
}
ReactDOM.render(
      <App />, document.getElementById('content')
   );










