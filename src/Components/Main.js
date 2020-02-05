import React,{Component} from 'react';
import Radium from 'radium'
import './main.css'
class main extends Component{

    render(){
        
        return(
            <div class="taskboard">
               <span>complete assignments <input type="checkbox"></input><br/></span>
               <span>play PUBG <input type="checkbox"></input><br/></span>
               <hr/>
               <span>watch FRIENDS <input type="checkbox"></input><br/></span>
            </div>
        )
    }
}

export default Radium(main);