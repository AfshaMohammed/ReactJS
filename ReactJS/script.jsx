import React from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component{
   render(){
   return(
      <div>
      
      <Text/>
      <Input/>
      </div>
   );

   }
}
class Text extends React.Component{
   render(){
      return(
         <h1>It is a Stateful Component</h1>
      );
   }
}
class Input extends React.Component{
      render(){
         return(
            <input type="text" name="someText"/>
         );
      }

}
ReactDOM.render(
   <MyComponent/>, document.getElementById('content')
);













