import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    products:[
      {name:'Tomate', price:1500, img:'/products/tomate.jpg'},
      {name:'Arbeja', price:2500, img:'/products/arbeja.jpg'},
      {name:'Lechuga', price:500, img:'/products/lechuga.jpg'},
    ],
    car:[ ],
    isVisibleCar: false
  }

  addToShoppingCar = (product) => {
    const { car } = this.state;
    if(car.find(x => x.name === product.name)) {
      const newCar = car.map( x => x.name === product.name
        ? ({ ...x, quantity: x.quantity + 1 })
        : x)
      return this.setState({ car: newCar })
    }

    return this.setState({
      car: this.state.car.concat({
        ...product, quantity: 1
      })
    })
  };

  showShoppingCar = () => {
    if(!this.state.car.length){ return }
    this.setState({ isVisibleCar: !this.state.isVisibleCar })
  }

  render(){
    const { isVisibleCar } = this.state;
    return (
      <div>
        <Navbar 
          car={this.state.car} 
          isVisibleCar={isVisibleCar} 
          showShoppingCar={this.showShoppingCar}
        /> 
        <Layout>
          <Title/>
          <Products
            addToShoppingCar = {this.addToShoppingCar}
            products = {this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
