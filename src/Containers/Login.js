import React,{Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class login extends Component{
  render(){
      var style={
          'position':'absolute',
          'width':'100%',
          'textAlign':'center'
      }
    return(
      <div class="App">
        <Header color="#7fd7e3" text="ToDo" />
        <span style={style}><i>Login Page</i></span>
        <Footer color="#7fd7e3" text= "ToDo Ltd." />
      </div>
    )
  }
}

export default login;
