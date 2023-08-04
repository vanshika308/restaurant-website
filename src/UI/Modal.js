import React from 'react'; // Add the import for React
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = props => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <React.Fragment> {/* Use React.Fragment instead of importing it separately */}
            {ReactDOM.createPortal(<BackDrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
