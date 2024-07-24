import { Component } from "react";

class Input extends Component {
    render(){
        return (
            <input
                value = {this.props.value}
                onChange = {this.props.onChange}
            />
        )
    }
}

class App extends Component {
    state = {
        firstName: '',
        lastName: '',
     }
    updateValues = (props, value) => {
        console.log(`
            Just here the props: ${props} \n 
            with its arr destructuring: ${[props]} \n
            and value: ${value}
        `);

        this.setState({ [props]: value })
    }
    render (){
        return(
            <p> 
                Full name: {`${this.state.firstName} ${this.state.lastName}`}
                <Input 
                    value ={this.state.firstName}
                    onChange = {e => this.updateValues('firstName', e.target.value )}
                />
                <Input 
                    value ={this.state.lastName}
                    onChange = {e => this.updateValues('lastName', e.target.value )} 
                />
            </p>
        )
    }
}

export default App