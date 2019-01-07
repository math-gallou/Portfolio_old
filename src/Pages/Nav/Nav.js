import React from 'react';
import './style.css';

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
        var i, tablinks;

        // Get all elements with class="tabcontent" and hide them
        // tabcontent = document.getElementsByClassName("tabcontent");
        // for (i = 0; i < tabcontent.length; i++) {
        //     tabcontent[i].style.display = "none";
        // }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            (tablinks[i]).parentNode.className = (tablinks[i]).parentNode.className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        // document.getElementById(name).style.display = "block";
        if (truc !== "accueil")
            document.getElementById("id"+truc).parentNode.className += " active";
    }

    render(){
        return (
            <nav className="nav">
                <div>
                    <a href="#" className="tablinks" id="idaccueil" data-key="accueil" onClick={this.special}>Accueil</a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idapropos" data-key="apropos" onClick={this.openTab}>
                        A propos
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idtravaux" data-key="travaux" onClick={this.openTab}>
                        Travaux
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idparcours" data-key="parcours" onClick={this.openTab}>
                        Parcours
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idcompetences" data-key="competences" onClick={this.openTab}>
                        Compétences
                    </a>
                </div>
                <div>
                    <a href="#" className="tablinks" id="idcontact" data-key="contact" onClick={this.openTab}>
                        Contact
                    </a>
                </div>
            </nav>);
    }
}

export default BoxNav;