import React from 'react';
import './style.css';

function BoxCompetences(props){
    return (
        <div id="competences" className="tabcontent">
            <div id="idcontentcompetences">
                Prochainement.
                <div className="enattendant">
                    En attendant plus de contenu, vous pouvez toujours visualiser et télécharger mon CV <a href="CV_Mathilde_Gallou.pdf" target="_blank">ici</a> !
                </div>
            </div>
        </div>);
}

export default BoxCompetences;