// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
// import { Title } from './components/Title';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { render } from '@testing-library/react';


function App() {
// Add Title for web site using document.title with useEffect 

useEffect(() => {
  document.title = 'Omar Ordeche';
}, []);

  return (
//     <Scrollbars
//   style={{  height: 400 }}
//   renderThumbVertical={({ style }) => (
//     <div
//       style={{
//         ...style,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         borderRadius: '3px',
//       }}
//     />
//   )}
//   renderTrackVertical={({ style }) => (
//     <div
//       style={{
//         ...style,
//         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         borderRadius: '3px',
//       }}
//     />
//   )}
// >

<div className="App">
<Scrollbars style={{ height:"720px"}}> 
     <NavBar />
     <Banner />  
     <Skills />
    <Projects />
    {/* <Banner /> */}
    {/* <Skills /> */}
    </Scrollbars>
    </div>   
    
  );
}




export default App;


// style={{ width: 500, height: 300 }}

{/* <Scrollbars style={{ height:"750px"}}></Scrollbars> */}