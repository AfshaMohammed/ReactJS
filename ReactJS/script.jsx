import React from 'react';
import ReactDOM from 'react-dom';

const HOC = (InnerComponent) => class extends React.Component{
   componentWillMount(){
      console.log('Will Mount')
   }
   render(){
      return(
            <InnerComponent 
               {...this.props}
            />
         );
   }
}
   class App extends React.Component{
      render(){
         return(
               <div>
                  <Button>Button</Button>
                  <hr/>
                  <Label>Label</Label>
               </div>
            );
      }
   }
const Button = HOC((props) => <button>{props.children}</button>)
const Label = HOC((props) => <label>{props.children}</label>)
     ReactDOM.render(
      <App />, document.getElementById('content')
   );









