import MyButton from './Button';

const App = () => {
    const myList = [
        'Metalero Feliz',
        'Metalero Emocionado',
        'Metalero Lugubre',
    ]
    const miVaribale = false;
    if(miVaribale){
        return(
            <h1>Hola Amigo mi varable esta llegando como true</h1>
        )
    }
    return(
        <div>
            <h1>Hello world react class 25</h1>
            {myList.map(el => <p key={el}>{el}</p>)}
            <MyButton onClick={(e) => {
                console.log('clickeado', e)
            }}>Send</MyButton>
        </div>
    )
}

export default App