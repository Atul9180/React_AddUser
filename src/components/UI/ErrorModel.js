import React from "react";
import ReactDom from "react-dom";
import "./ErrorModel.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onConfirm} />;
};

const ModelOverlay = (props) => {
  return (
    <Card className="errorModel">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className="errorContent">
        <p>{props.message}</p>
      </div>

      <footer>
        <Button onClick={props.onConfirm}>Cancel</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {/*this is React portal to open model(here very close to body element) somewhere far apart location args:(what_to_port,where_to_port) */}
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModel;
