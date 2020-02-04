import React,{Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class app extends Component{
  render(){
    return(
      <div>
        <Header color="#7fd7e3" text="ToDo" />
        
        <Footer color="#7fd7e3" text= "ToDo Ltd." />
      </div>
    )
  }
}

export default app;
