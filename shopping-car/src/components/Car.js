import { Component } from 'react';
import BubbleAlert from './BubbleAlert'
import DetailsCar from './DetailsCar';

const styles = {
    car:{
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Car extends Component{
    render(){
        const { car, isVisibleCar, showShoppingCar  } = this.props;
        const totalItems = car.reduce((acc, el) => acc + el.quantity, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    { totalItems !== 0 ? <BubbleAlert value={totalItems}/> : null}
                </span>
                <button onClick={showShoppingCar} style={styles.car}>
                    Shopping Car
                </button>
                { isVisibleCar ? <DetailsCar car={car}/> : null}
            </div>
        )
    }
};

export default Car;