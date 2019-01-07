import React from 'react';
import './style.css';
import BoxApropos from "../A_propos/Apropos";
import BoxCompetences from "../Competences/Competences";
import BoxContact from "../Contact/Contact";
import BoxParcours from "../Parcours/Parcours";
import BoxTravaux from "../Travaux/Travaux";
import BoxAccueilRight from "../AccueilRight/AccueilRight";

function BoxContent(props){
    return (
        <div id="boxcontent">
            <BoxAccueilRight/>
            <BoxApropos/>
            <BoxCompetences/>
            <BoxContact/>
            <BoxParcours/>
            <BoxTravaux/>
        </div>);
}

export default BoxContent;