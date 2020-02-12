import React,{Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class register extends Component{
  render(){
    return(
      <div class="App">
        <Header color="#7fd7e3" text="ToDo" />

        <h1>Register Page</h1>

        <Footer color="#7fd7e3" text= "ToDo Ltd." />
      </div>
    )
  }
}

export default register;
