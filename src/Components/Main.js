import React,{Component} from 'react';
import Radium from 'radium'
import './main.css'
class main extends Component{

    render(){
        
        return(
            <div class="main">
                <div class="taskboard">
                    <h4>TODO</h4>
                    <span>complete assignments <input type="checkbox"></input><br/></span>
                    <span>play PUBG <input type="checkbox"></input><br/></span>
                    <span>Meeting on AI <input type="checkbox"></input><br/></span>
                    <hr/>
                    <h4>COMPLETED</h4>
                    <div class="completed">
                        watch FRIENDS<br/>
                        meet Rajesh<br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(main);