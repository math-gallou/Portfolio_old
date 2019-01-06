import posed from "react-pose";
import React from 'react';
import './style.css';
import BoxHeader from "../Header/Header";
import BoxContent from "../Content/Content";
import BoxFooter from "../Footer/Footer";
import BoxNav from "../Nav/Nav";

const Box = posed.div({
    show: {
        x:'0vw',
        width:'100vw',
        applyAtStart: { display: "flex",
            position:'static'},
        transition: {
            x: { type: 'spring',
                stiffness: 50,
                damping: 30,
                duration : 1500 },
            width:{ ease: 'linear',
                duration:500 }
        }
    },
    hidden: {
        delay:400,
        width:'0vw',
        x:'200vw',
        applyAtStart:{ position:'absolute' },
        applyAtEnd: { display: "none" },
        transition: {
            x: { type: 'spring',
                stiffness: 50,
                damping: 30,
                duration : 1500 },
            width:{ ease: 'linear',
                duration:500 }
        }
    }
});

function BoxRight(props){
    const parent = props.object;

    return (
        <Box className="mainright" pose={!parent.state.isVisible ? 'show' : 'hidden'}>
            <BoxNav object={parent}/>
            <div id="centerapp">
                <BoxHeader/>
                <BoxContent/>
                <BoxFooter/>
            </div>
        </Box>);
}

export default BoxRight;