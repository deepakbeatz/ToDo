import React,{Component} from 'react';
import Radium from 'radium'
import './main.css'
class main extends Component{
    state={
        "Itasks":[],
        "Ctasks":[]
    }
    render(){
        const taskHandler=(event)=>{
            if(event.target.checked){
                var name=event.target.value
                var temp=this.state.Ctasks;
                temp.push(name);
                this.setState({"Ctasks":temp})
            }  
        }

        
    
        return(
            <div class="main">
                <div class="taskboard">
                    <h4>TODO</h4>
                    <span>complete assignments <input type="checkbox" value="complete assignments" onChange={taskHandler}></input><br/></span>
                    <span>play PUBG <input type="checkbox" value="play PUBG" onChange={taskHandler}></input><br/></span>
                    <span>Meeting on AI <input type="checkbox" value="Meeting on AI" onChange={taskHandler}></input><br/></span>
                    <hr/>
                    <h4>COMPLETED</h4>
                    <div class="completed">
                        {this.state.Ctasks}
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(main);