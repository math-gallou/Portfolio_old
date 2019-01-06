import React from 'react';
import './style.css';
import Accueil from '../Accueil/Accueil';
import RightBox from '../Right/Right';

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
                <RightBox object={this}/>
            </div>
        );
    }
}

export default Main;