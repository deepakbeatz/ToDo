import React,{Component} from 'react';
import Radium from 'radium'

class footer extends Component{
    


    render(){
        var style={
            position:'absolute',
            width:'100%',
            backgroundColor:this.props.color,
            textAlign:'center',
            height:'35px',
            paddingTop:'1%',
            bottom:'0%'
        }
        return(
            <div style={style}>
               <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{this.props.text}
            </div>
        )
    }
}

export default Radium(footer);