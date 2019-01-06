import posed from "react-pose";
import './style.css';
import React from 'react';
import forward from './../../img/forward-purple.png';

const Box = posed.div({
    show: {
        x:'0vw',
        width:'100vw',
        transition: {
            x: { type: 'spring',
                 stiffness: 50,
                 damping: 30,
                 duration : 1500 },
            width:{ ease: 'linear',
                    duration:500 }
        },
        applyAtStart: { display: "flex",
                        position:'static'},
    },
    hidden: {
        delay : 100,
        width:'0vw',
        x:'-200vw',
        applyAtStart:{ position:'absolute' },
        applyAtEnd: { display: "none" },
        transition: {
            x: { type: 'spring',
                 stiffness: 50,
                 damping: 30,
                 duration : 1500 },
            width:{ ease: 'linear',
                    duration:500 }
        },
    }
});

const Bouton = posed.button({
                hoverable: true,
                pressable: true,
                init: { scale: 1,
                        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
                },
                hover: {scale: 1.2,
                        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
                },
                press: {scale: 1.1,
                        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
                }
});


function Accueil(props){
    const parent = props.object;

    return (
        <Box className="accueil" pose={parent.state.isVisible ? 'show' : 'hidden'}>
            <div className="title">
                <h1>
                    Bonjour, je m'appelle Mathilde Gallou
                </h1>
                <h2>
                    Bienvenue sur mon portfolio !
                </h2>
            </div>
            <Bouton className="boutonSuite" onClick={parent.handleClick}>
                <img alt="bouton" src={forward} className="imgBouton"/>
                <span className="tooltiptext">Continuez pour en savoir plus !</span>
            </Bouton>
        </Box>
    );
}

export default Accueil;