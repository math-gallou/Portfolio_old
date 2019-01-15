import React from 'react';
import './style.css';

class BoxApropos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="apropos" className="tabcontent">
                <div id="idcontentapropos">
                    Prochainement.
                </div>
            </div>);
    }
}

export default BoxApropos;