// import Card from './components/Card';

// function App(){
//   return(
//     <div className = "App">
//       <Card header="This is title">
//       <p>This is your children!</p>
//       <ul>
//         <li>hi!</li>
//         <li>hi!</li>
//         <li>hi!</li>
//       </ul>
//     </Card>
//     </div>
//   );
// }

// export default App;

// import {useState} from "react";
// import Text from "./components/Text";
// 
// const Colors = ["red", "green", "blue", "yellow"];
// 
// function App(){
  // const [index, setIndex] = useState(0);
// 
  // function handleChangeColor(){
    // if(index >= 3){
      // setIndex(index%3);
      // console.log(index);
    // }else{
      // setIndex(index+1);
    // }
  // }
// 
  // return(
    // <div className="App">
      {/* <button onClick ={handleChangeColor}>Change color</button> */}
      {/* <Text text={"Your text is here"} color ={`${Colors[index]}`}/> */}
    {/* </div> */}
  // );
// }
// 
// export default App;

import React from 'react';
import Card from "./components/Card";
import List from './components/List';
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';

function App(){
  return(
    <div className='App'>
      {/* <TypeMe/> */}
      <MyForm/>
    </div>
  )
}
export default App;

// from List
// const App = () => {
  // const users = [
    // {
      // name: 'John Doe',
      // job: 'Engineer',
      // hobby: 'Listen to Music',
    // },
    // {
      // name: 'John Doe',
      // job: 'Engineer',
      // hobby: 'Listen to Music',
    // },
    // {
      // name: 'John Smith',
      // job: 'Programmer',
      // hobby: 'Running',
    // },
    // {
      // name: 'John Roe',
      // job: 'Farmer',
      // hobby: 'Swimming',
    // },
  // ];
// 
  // return <List users={users} />;
// 
  // from Card
  //return(
  //(
    // <div >
   // {/* <Card name="John Doe" job="Engineer" hobby="Listen to Music"/> */}
    
   // </div>
    
 // );
// }
//  
// export default App;

