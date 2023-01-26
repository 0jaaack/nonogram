import React from "react";
import ReactDOM from "react-dom";

const modalRootElement = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
  }

  onBackgroundClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.closeModal();
  }

  render() {
    return (
      <div
        className="flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-black/[0.1] backdrop-blur-sm"
        onClick={this.onBackgroundClick}
      >
        {this.props.children}
      </div>
    );
  }
}

function withModal(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement("div");
      this.closeModal = this.closeModal.bind(this);

      this.state = {
        showModal: true,
      };
    }

    componentDidMount() {
      modalRootElement.appendChild(this.el);
    }

    componentWillUnmount() {
      modalRootElement.removeChild(this.el);
    }

    closeModal(event) {
      this.setState({ showModal: false });
    }

    render() {
      return ReactDOM.createPortal(
        this.state.showModal && (
          <Modal closeModal={this.closeModal}>
            <Component closeModal={this.closeModal} />
          </Modal>
        ),
        this.el,
      );
    }
  }
}

export default withModal;
