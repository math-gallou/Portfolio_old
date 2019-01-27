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
                    En attendant plus de contenu , vous pouvez consulter et télécharger mon CV <a href="CV_Mathilde_Gallou.pdf" target="_blank" > ici </a>
                </div>
            </div>);
    }
}

export default BoxApropos;