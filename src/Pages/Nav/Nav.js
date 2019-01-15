import React from 'react';
import './style.css';
import {styler, tween} from "popmotion";

class BoxNav extends React.Component{
    constructor(props){
        super(props);
        this.openTab = this.openTab.bind(this);
        this.special = this.special.bind(this);
        this.parent = props.object;
    }

    special(e){
        this.parent.handleClick();
        this.openTab(e);
    }

    openTab(e) {
        const truc = e.target.dataset.key;
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            (tablinks[i]).className = (tablinks[i]).className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(truc).style.display = "flex";
        if (truc !== "accueil")
            document.getElementById("idtab"+truc).className += " active";

        this.showContent(truc);
    }

    showContent(truc) {
        const myAnim = tween({
            from: {
                scale: .7,
                opacity: 0,
                y: -300
            },
            to: {
                scale: 1,
                opacity: 1,
                y: 0
            },
            duration: 1000
        });
        const box = styler(document.getElementById("idcontent"+truc));
        myAnim.start(box.set);
    }

    render(){
        return (
            <nav className="nav">
                <div>
                    <a href="#" className="tablinks" id="idtabaccueil" data-key="accueil" onClick={this.special}>
                        Accueil
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtabapropos" data-key="apropos" onClick={this.openTab}>
                        A propos
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtabtravaux" data-key="travaux" onClick={this.openTab}>
                        Travaux
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtabparcours" data-key="parcours" onClick={this.openTab}>
                        Parcours
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtabcompetences" data-key="competences" onClick={this.openTab}>
                        Compétences
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtabcontact" data-key="contact" onClick={this.openTab}>
                        Contact
                    </a>
                </div>
            </nav>);
    }
}

export default BoxNav;