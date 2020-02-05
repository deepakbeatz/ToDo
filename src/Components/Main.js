import React,{Component} from 'react';
import Radium from 'radium'
import './main.css'
class main extends Component{
    state={
        "Itasks":['complete assignments','play PUBG','meet John'],
        "Ctasks":[]
    }
    render(){
        const completeHandler=(event)=>{
            let temp=[]
            if(event.target.checked){
                var name=event.target.value
                temp=this.state.Ctasks;
                temp.push(<div>{name}<br /></div>);
                this.setState({"Ctasks":temp})
                var Itasks=this.state.Itasks; 
                console.log(Itasks)
                console.log(Itasks.indexOf())
                Itasks.splice(Itasks.indexOf(name), 1);
                console.log(Itasks)
                this.setState({"Itasks":Itasks});
            }
            
        }

        const getTasks=()=>{
            let tasks=[]
            let temp=this.state.Itasks;
            for(var i=0;i<temp.length;i++){
                tasks.push(<div>{temp[i]}<input type="checkbox" value={temp[i]} onChange={completeHandler} checked={false}></input><br/></div>)
            }
            return tasks
        }
        
    
        return(
            <div class="main">
                <div class="taskboard">
                    <h4>TODO</h4>
                    {getTasks()}
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