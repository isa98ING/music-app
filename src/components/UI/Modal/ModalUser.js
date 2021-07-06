import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import modalClasses from './Modal.module.css';
import classes from "./ModalUser.module.css";

const InfoModalOverlay = (props) => {
    return (
        /*Modal*/
        <div className={`${modalClasses.modal} ${classes.modal}`}>
            {/* inner Modal*/}

            <div className={classes['inner-modal']}>
                <div className={classes.content}>
                    {/* About*/}
                    <div className={classes.about}>
                        <h2>About</h2>
                        <p>The web has been created using React.<br/> It was made to practice theme handling and the Spotify API.</p>
                    </div>
                    {/* Reach Out*/}
                    <div className={classes.reachout}>
                        <h2>Reach out</h2>
                        <div className={classes.links}>
                            <a href="https://github.com/isa98ING">Github</a>
                            <a href="https://www.linkedin.com/in/isabel-d-m/">LinkedIn</a>
                        </div>
                    </div>
                </div>
                {/* Button*/}
                <button
                    type={props.type || "button"}
                    className={modalClasses.button}
                    onClick={props.onClose}
                > Close </button>

            </div>
        </div>
    );
};
const portalElement = document.getElementById("overlays");

export const ModalInfo = (props) => {
    return (<React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            portalElement
        )}
        {ReactDOM.createPortal(
            <InfoModalOverlay onClose={props.onClose}>{props.children}</InfoModalOverlay>,
            portalElement
        )}
    </React.Fragment>
    )
}