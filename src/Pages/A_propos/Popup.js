import React from 'react';
import Popup from 'reactjs-popup';
import posed from "react-pose";

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

class ControlledPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.image = props.image;
        this.texte = props.texte;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal (){
        this.setState({ open: true });
    };

    closeModal () {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Bouton onClick={this.openModal}>
                    <img alt={this.image} src={this.image}/>
                </Bouton>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        {this.texte}
                    </div>
                </Popup>
            </div>
        );
    };
};

export default ControlledPopup;