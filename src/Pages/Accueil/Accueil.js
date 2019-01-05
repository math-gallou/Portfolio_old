import posed from "react-pose";
import './style.css';
import React from 'react';

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
        applyAtStart: { display: "block",
                        position:'static'},
    },
    hidden: {
        delay : 400,
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

function Accueil(props){
    const parent = props.object;
    return (
        <Box className="accueil" pose={parent.state.isVisible ? 'show' : 'hidden'}>
            <h1>
                Bonjour, je m'appelle Mathilde Gallou
            </h1>
            <h2>
                Bienvenue sur mon portfolio.
            </h2>
            <button onClick={parent.handleClick} pose={parent.state.isVisible ? 'show' : 'hidden'}>
                Continuer
            </button>
        </Box>
    );
}

export default Accueil;