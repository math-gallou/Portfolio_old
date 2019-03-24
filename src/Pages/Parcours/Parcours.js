import React from 'react';
import './style.css';

function BoxParcours(props){
    return (
        <div id="parcours" className="tabcontent">
                <div id="idcontentparcours">
                    <p>
                        Mon parcours est atypique : après avoir obtenu mon baccalauréat en Sciences de l'ingénieur avec la mention bien, je me suis dirigée vers une dominante linguistique en intégrant
                        la licence LEA proposée par l'<a href="https://www.univ-tours.fr/" target="_blank">Université de Tours</a>. J'y ai étudié durant toute une année l'anglais et l'allemand, mais aussi
                        des sujets s'appliquant au commerce à l'international : le droit, l'économie, la civilisation des pays anglophones et germapnophones, la comptabilité, ... Malheureusement,
                        la formation ne m'a pas plu, et je me suis redirigée vers l'informatique en intégrant l'IUT d'Orléans en 2017.
                    </p>
                    <div className="enattendant">
                        En attendant plus de contenu, vous pouvez toujours visualiser et télécharger mon CV <a href="CV_Mathilde_Gallou.pdf" target="_blank">ici</a> !
                    </div>
                </div>
        </div>);
}

export default BoxParcours;