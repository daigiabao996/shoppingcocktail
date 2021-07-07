import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './ModalCheck.scss'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ModalCheck extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <button onClick={this.onOpenModal}>{this.props.name}</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <div className="checkout">
            <h3>{this.props.header}</h3>
            <button className="btn-agree" onClick={this.props.function}>
              YES
            </button>
            <button className="btn-cancel" onClick={this.onCloseModal}>
              CANCEL
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalCheck;
