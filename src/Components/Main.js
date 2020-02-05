import React,{Component} from 'react';
import Radium from 'radium'
import './main.css'
class main extends Component{
    state={
        "Itasks":[],
        "Ctasks":[],
        
    }
    render(){
        const completeHandler=(event)=>{
            let temp=[]
            if(event.target.checked){
                var name=event.target.value
                temp=this.state.Ctasks;
                temp.push(name);
                this.setState({"Ctasks":temp})
                var Itasks=this.state.Itasks; 
                Itasks.splice(Itasks.indexOf(name), 1);
                this.setState({"Itasks":Itasks});
            }
            
        }

        const redoHandler=(name)=>{
            var Ctasks=this.state.Ctasks;
            Ctasks.splice(Ctasks.indexOf(name), 1);
            this.setState({"Ctasks":Ctasks});
            var Itasks=this.state.Itasks; 
            Itasks.push(name);
            this.setState({"Itasks":Itasks});
        }

        const getItasks=()=>{
            let tasks=[]
            let temp=this.state.Itasks;
            for(var i=0;i<temp.length;i++){
                tasks.push(<div>{temp[i]}<input type="checkbox" value={temp[i]} onChange={completeHandler} checked={false}></input><br/></div>)
                
            }
            return tasks
        }

        const getCtasks=()=>{
            let tasks=[]
            let temp=this.state.Ctasks;
            for(var i=0;i<temp.length;i++){
                tasks.push(<div>{temp[i]} <i value={temp[i]} onClick={redoHandler.bind(this,temp[i])} class="fas fa-redo"></i><br /></div>)
            }
            return tasks
        }
        
        const formHandler=(e)=>{
            e.preventDefault();
            document.getElementById('form').style.visibility="hidden";
            var item=this.refs.item.value
            if(item!=null){
                var Itasks=this.state.Itasks; 
                Itasks.push(item);
                this.setState({"Itasks":Itasks});
            }
        }
        
        const addHandler=()=>{
            document.getElementById('form').style.visibility="visible";
        }
        
        
        return(
            <div class="main">
                <div class="taskboard">
                    <h4>TODO</h4>
                    {getItasks()}<br/>
                    <div id="light" onClick={addHandler}><i class="fas fa-plus"></i> Add Task</div>
                    <div id="form">
                        <form onSubmit={formHandler.bind(this)}><input name="item" ref="item" type="text"/> <input type="submit"value="Add Item"/></form>
                    </div>
                    <hr/>
                    <h4>COMPLETED</h4>
                    <div class="completed">
                        {getCtasks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(main);