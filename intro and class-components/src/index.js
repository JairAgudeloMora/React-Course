import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const Li = ({ children, state, hasHome, yearsOld }) => {
//   console.log(`El socito tiene hogar? ${hasHome}\n y con edad de ${yearsOld} años`);
//   return (
//     <li>{children} estoy {state}</li>
//   )
// }
// const MyTitle = () => 
//   <ul>
//     <Li 
//       state={'feliz'}
//       hasHome={false}
//       yearsOld={24}
//       >Jeremy</Li>
//     <Li 
//       state={'triste'}
//       hasHome={true}
//       yearsOld={14}
//     >Jeremy</Li>
//     <Li 
//       state={'emocionado'}
//       hasHome={true}
//       yearsOld={20}
//     >Papu</Li>
//   </ul>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <MyTitle />
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
