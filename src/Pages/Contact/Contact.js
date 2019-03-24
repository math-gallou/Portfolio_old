import React from 'react';
import './style.css';
import posed from "react-pose";

const Image = posed.img({
    hoverable: true,
    init: { scale: 1,
            margin : ".5em",
            height : "5em",
    },
    hover: {scale: 1.2}
});

function BoxContact(props){
    return (
        <div id="contact" className="tabcontent">
            <div id="idcontentcontact">
                <h3>Vous pouvez me retrouver sur : </h3>
                <br/> LinkedIn <a href="https://www.linkedin.com/in/mathilde-gallou-a28968158/" target="_blank"><Image alt="logo linekdin" src="logos/linkedin.png" /></a>
                <br/> Github <a href="https://github.com/math-gallou" target="_blank"><Image alt="logo github" src="logos/github.png" /></a>
                <br/> et me contacter par mail à l'adresse <a href="mailto:math.gallou@gmail.com?Subject=Demande%20de%20contact" target="_top">math.gallou@gmail.com</a> <Image alt="logo gmail" src="logos/gmail.png" />
            </div>
        </div>);
}

export default BoxContact;