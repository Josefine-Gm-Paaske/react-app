/**
 * Paths begins with './nameOfPath.'
 */
 import './App.css';
 import POPOSList from './POPOSList';
 import React from 'react';
 /**
  * 
  * @returns App is the top-level component in the project
  */
  function App() {
   return (
     <div className="App">
       <POPOSList />
     </div>
   );
 }
 
 export default App;