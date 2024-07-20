//import logo from './logo.svg';
//import './App.css';
import './main.css'
// const mySecondStyle = {
//   boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
// }

// const myFirtsStyle = (bg = '#330') => ({
//   backgroundColor: bg,
//   color: '#fff',
//   padding: '10px 15px',
//   margin: '10px 15px',
// })

const Li = ({children}) => {
  return(
    <li
      className='clase-li'
    >{children}</li>
  )
}

function App() {
  //const valor = 'feliz';
  return (
    <ul className='clase-css'>
      <Li>Valor de Li</Li>
    </ul>  
  );
}

export default App;
