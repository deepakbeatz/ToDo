import React,{Component} from 'react';
import Radium from 'radium'
import Navbar from './Navbar'

class header extends Component{

    render(){

        return(
            <div>
                <Navbar />
            </div>
        )
    }
}

export default Radium(header);