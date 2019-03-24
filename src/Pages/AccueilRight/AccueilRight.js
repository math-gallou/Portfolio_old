import React from 'react';
import './style.css';

function BoxAccueilRight(props){
    return (
        <div id="accueil" className="tabcontent">
            <div>
                Bienvenue sur ce site. Il me permettra de vous présenter mes compétences et mon parcours professionnel.
                <br></br><br></br>
                Il est à ce jour en construction. Merci pour votre patience !
            </div>
            <div className="enattendant">
                En attendant plus de contenu, vous pouvez toujours visualiser et télécharger mon CV <a href="CV_Mathilde_Gallou.pdf" target="_blank">ici</a> !
            </div>
        </div>);
}

export default BoxAccueilRight;