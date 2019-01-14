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
        applyAtStart: { display: "flex",
            position:'static'},
        transition: {
            x: { type: 'spring',
                stiffness: 15,
                damping: 45,
                duration : 500 },
        }
    },
    hidden: {
        delay:400,
        x:'200vw',
        applyAtStart:{ position:'absolute' },
        applyAtEnd: { display: "none" },
        transition: {
            x: { ease: 'linear',
                 duration : 1500 },
        }
    }
});

function BoxRight(props){
    const parent = props.object;

    return (
        <Box className="mainright" pose={!parent.state.isVisible ? 'show' : 'hidden'}>
            <BoxHeader object={parent}/>
            <div id="centerapp">
                <BoxContent/>
            </div>
            <BoxFooter/>
        </Box>);
}

export default BoxRight;