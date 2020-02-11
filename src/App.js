import React,{Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import './App.css';


class app extends Component{
  render(){
    return(
      <div class="App">
        <Header color="#7fd7e3" text="ToDo" />

        <Main /><br/><br/>

        <Footer color="#7fd7e3" text= "ToDo Ltd." />
      </div>
    )
  }
}

export default app;
