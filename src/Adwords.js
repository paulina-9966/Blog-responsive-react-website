import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
     ModalFooter, Container, Row, Col } from 'reactstrap';

import cat from './cat.jpg';


const Adwords = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    <div>
        <Container>
            <Row>
                <Col lg="12" className="adword-container">
                    
<Button className="adword-button" color="danger" onClick={toggle}>{buttonLabel}
Producent legowisk dla kotów poleca...</Button>
                </Col>
            </Row>
        </Container>  
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Kup legowisko naszej firmy</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing 
          elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nost
           rud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehende
           <img src={cat} alt="photo" className="cat"></img>
          <br />
          <Button color="success" onClick={toggleNested}>
              Poznaj więcej szczegółów</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Legowiska polecane przez specjalistów
                <br/> i rasowe koty</ModalHeader>
            <ModalBody>
                <div className="shadow p-3 mb-5 bg-body rounded">
                Lorem ipsum dolor sit amet, consectetur adipisicing 
          elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nost
           rud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehende
                </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Zamknij</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>Zamknij wszystko</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button color="secondary" onClick={toggle}>Anuluj</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Adwords;