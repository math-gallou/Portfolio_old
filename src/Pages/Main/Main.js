import React from 'react';
import './style.css';
import posed from 'react-pose';
import Accueil from '../Accueil/Accueil'

const Nav = posed.div({
    show: {
        x:'0vw',
        width:'100vw',
        applyAtStart: { display: "block",
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

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ isVisible: !this.state.isVisible } );
    }

    render() {
        return (
            <div id="app">
                <Accueil object={this}/>
                <Nav className="nav" pose={!this.state.isVisible ? 'show' : 'hidden'}>
                    <h1>
                        Bonjour, je m'appelle Mathilde Gallou
                    </h1>
                    <h2>
                        Bienvenue sur mon portfolio.
                    </h2>
                    <button onClick={this.handleClick} pose={this.state.isVisible ? 'show' : 'hidden'}>
                        Continuer
                    </button>
                </Nav>
            </div>
        );
    }
}

export default Main;