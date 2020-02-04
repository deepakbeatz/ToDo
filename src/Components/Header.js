import React,{Component} from 'react';
import Radium from 'radium'

class header extends Component{
    


    render(){
        var style={
            position:'fixed',
            width:'100%',
            backgroundColor:this.props.color,
            textAlign:'center',
            height:'40px',
            paddingTop:'1%',
            top:'0%'
        }
        return(
            <div style={style}>
                <i className="fa fa-hand-o-right" aria-hidden="true"></i>{this.props.text}
            </div>
        )
    }
}

export default Radium(header);