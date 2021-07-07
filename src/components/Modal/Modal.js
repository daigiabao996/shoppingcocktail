import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Cart from "../Cart/Cart"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ModalExtension extends React.Component {
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
        <button onClick={this.onOpenModal}>Cart</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <Cart />
        </Modal>
      </div>
    );
  }
}

export default ModalExtension;
