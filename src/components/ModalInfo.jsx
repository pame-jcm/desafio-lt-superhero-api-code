import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

const ModalInfo = ({show, title, message, onAccept, objSH}) => {
        
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='rounded-0'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {objSH?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Appereance</h4>
        <Row>
          <Col>Gender: {objSH?.appearance?.gender}</Col>
          <Col>Race: {objSH?.appearance?.race}</Col>
          <Col>Eye Color: {objSH?.appearance?.eyeColor}</Col>
        </Row>
        <h4>Biography</h4>
        <Row>
          <Col>FullName: {objSH?.biography?.fullName}</Col>
          <Col>Alter Egos: {objSH?.biography?.alterEgos}</Col>
          <Col>Aliases: {objSH?.biography?.aliases}</Col>
        </Row>
        <h4>Work</h4>
        <Row>
          <Col>Occupation: {objSH?.work?.occupation}</Col>
        </Row>
        <h4>Connections</h4>
        <Row>
          <Col>Group Affiliation: {objSH?.connections?.groupAffiliation}</Col>
          <Col>Relatives: {objSH?.connections?.relatives}</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onAccept} variant="black">Cerrar</Button>        
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInfo