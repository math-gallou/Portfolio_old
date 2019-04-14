import React from 'react';
import './style.css';
import ControlledPopup from './Popup.js';
import marvel from '../../img/logos/marvel.png';

class BoxApropos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="apropos" className="tabcontent">
                <div id="idcontentapropos">
                    <div id="contenu_apropos">
                        <p className="contenu_apropos_p">
                            Je m'appelle Mathilde Gallou, et je suis étudiante et apprentie en 2ème année de DUT Informatique à <a className="a_propos_link" href="http://www.univ-orleans.fr/iut-orleans" target="_blank">l'IUT d'Orléans</a>.
                            Je travaille en alternance chez <a className="a_propos_link" href="https://www.uxen.fr/" target="_blank">UXEN</a>.
                            Etant très impliquée dans ma formation et dans mon entreprise, j'ai travaillé dur afin d'obtenir la place de <span className="keywords">major de promo</span> et
                            de mettre toutes les chances de mon côté dans mes candidatures. Je souhaite plus que tout réussir dans mes études,
                            et je me donne les moyens chaque jour d'y parvenir. Aujourd'hui, j'ai postulé pour plusieurs formations en écoles d'ingénieur
                            (<a className="a_propos_link" href="https://www.utc.fr/" target="_blank">UTC</a>, <a className="a_propos_link" href="https://www.utbm.fr/" target="_blank">UTBM</a>, <a className="a_propos_link" href="http://www.enssat.fr/" target="_blank">ENSSAT</a>, <a className="a_propos_link" href="http://ensimag.grenoble-inp.fr/" target="_blank">ENSIMAG</a>)
                            proposant l'apprentissage.
                        </p>
                        <p className="contenu_apropos_p">
                            Dans mon temps libre, je fais beaucoup de choses variées.
                        </p>
                        <p className="contenu_apropos_p">
                            Le <span className="keywords">sport</span> occupe une partie importante de ma semaine, puisque je fais du badminton en club avec ma soeur notamment.
                            C'est un moment durant lequel je peux <span className="keywords">libérer mon esprit</span> et ne plus parler ni penser au travail et aux cours.
                            L'autre moment que je m'accorde et qui me laisse cette liberté aussi est quand je vais <span className="keywords">marcher</span> en ville ou dans la nature.
                            C'est une occasion pour prendre <span className="keywords">conscience de mon environnement</span> et faire germer de nouvelles idées dans ma tête.
                        </p>
                        <p className="contenu_apropos_p">
                            J'ai fait du <span className="keywords">théâtre</span> pendant 12 ans quand j'étais plus jeune.
                            Si je n'en fais plus aujourd'hui pour des raisons diverses, je compte bien reprendre à la rentrée prochaine.
                        </p>
                        <p className="contenu_apropos_p">
                            J'aime <span className="keywords">bricoler</span> : que ce soit avec mes mains ou mon clavier, je prends beaucoup de plaisir à apporter
                            des <span className="keywords">améliorations</span> aux choses que j'utilise tous les jours. Je modifie, je couds, je code, je crée ...
                        </p>
                        <p className="contenu_apropos_p">
                            Je <span className="keywords">cuisine</span> beaucoup aussi.
                            Je vois ça à la fois comme une autre forme de bricolage ou de programmation, puisqu'on <span className="keywords">construit</span> un plat en suivant une recette, tout
                            en laissant libre cours à notre imagination et appréciation.
                        </p>
                        <p className="contenu_apropos_p">
                            Enfin, je me passionne pour <span className="keywords">l'univers Marvel</span>.
                            C'est à travers les films d'Iron Man ou d'Avengers que j'ai vraiment pris <span className="keywords">goût à la technologie et au bricolage</span> :
                            même si tout ce qu'on peut voir dans ces films n'est aujourd'hui pas réalisable, j'aspire à pouvoir un jour rendre ces technologies <span className="keywords">réalité</span>.
                        </p>
                        <ControlledPopup image={marvel} texte="Enfin, je me passionne pour <span class='keywords'>l'univers Marvel</span>.
                            C'est à travers les films d'Iron Man ou d'Avengers que j'ai vraiment pris <span class='keywords'>goût à la technologie et au bricolage</span> :
                            même si tout ce qu'on peut voir dans ces films n'est aujourd'hui pas réalisable, j'aspire à pouvoir un jour rendre ces technologies <span class='keywords'>réalité</span>."/>
                    </div>
                </div>
            </div>);
    }
}

export default BoxApropos;