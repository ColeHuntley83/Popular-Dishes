import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

const appRoot = document.getElementById('app-root');

const ModalBackground = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 50;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const ModalContent = styled.div`
  position: absolute;
  z-index: 200;
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return ReactDOM.createPortal(
        // <ModalBackground onClick = { (e) => this.props.handleModal(e)}>
        <ModalBackground>
            {/* <ModalContent> */}
            {this.props.children}
            {/* </ModalContent> */}
        </ModalBackground>,
        appRoot
        )
    }
}

export default Modal;