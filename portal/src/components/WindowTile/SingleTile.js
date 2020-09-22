import React from 'react';
import { useState } from 'react';
import ReactDom, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// var Carousel = require('react-responsive-carousel').Carousel;
const SingleTile = ({ item }) => (
  <main class="animate__animated animate__fadeInLeft">
    <div id="slide" className="items">
      <section>
        <img
          alt="window"
          className="center"
          src={`https://assets.ff-24.net/${item.image}`}
        ></img>
        <div className="title">{item.name}</div>
        <div className="price">$2</div>
        <div className="more">
          <Subcat props={item} />
        </div>
      </section>
    </div>
  </main>
);

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
      <main
        show={subshow}
        onHide={subhandleClose}
        class="animate__animated animate__fadeInRight"
      >
        <div id="slide" className="items">
          <section>
            <img
              alt="window"
              className="center"
              src={`https://assets.ff-24.net/1.1.png`}
            ></img>
            <div className="title">{props.name}ee</div>
            <div className="price">$24</div>
            <div className="more"></div>
          </section>
        </div>
        <subcat />
      </main>
    </>
  );
}

function Example() {
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
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
