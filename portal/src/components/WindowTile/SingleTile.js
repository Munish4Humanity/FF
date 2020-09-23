import React from 'react';
import { useState } from 'react';
import ReactDom, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import DoubleTile from './DoubleTile';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// var Carousel = require('react-responsive-carousel').Carousel;
const SingleTile = ({ item }) => (
  <div className="App">
    {item.options ? (
      <Subcat name={item.name} img={item.image} />
    ) : (
      <Cat name={item.name} desc={item.description} img={item.image} />
    )}
  </div>
);

function Cat(props) {
  return (
    <main class="animate__fadeInLeft">
      <div id="slide" className="items">
        <section>
          <img
            alt="window"
            className="center"
            src={`https://assets.ff-24.net/${props.img}`}
          ></img>
          <div className="title">{props.name}</div>
          <div className="price">$2</div>
          <div className="more">
            <ModalBox Heading={props.name} desc={props.desc} />
          </div>
        </section>
      </div>
    </main>
  );
}
function Subcat(props) {
  const [subshow, subsetShow] = useState(false);

  const subhandleClose = () => subsetShow(false);
  const subhandleShow = () => subsetShow(true);

  return (
    <>
      {
        <a className="more" href="#" onClick={subhandleShow}>
          more..
        </a>
      }
      <main show={subshow} onHide={subhandleClose} class="animate__fadeInRight">
        <div id="slide" className="items">
          <section>
            <img
              alt="window"
              className="center"
              src={`https://assets.ff-24.net/${props.img}`}
            ></img>
            <div className="title">{props.name}</div>
            <div className="price">$24</div>
            <div className="more">
              <ModalBox Heading={props.name} desc={props.desc} />
            </div>
            <div className="subcat">
              <a href="DTile">View</a>
            </div>
          </section>
        </div>
        <subcat />
      </main>
    </>
  );
}

function ModalBox(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {
        <a className="more" href="#" onClick={handleShow}>
          more..
        </a>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.Heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SingleTile;
