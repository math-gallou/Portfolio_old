import React from 'react';
import Popup from 'reactjs-popup';

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
                <img alt={this.image} src={this.image} onClick={this.openModal}/>
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