import { Button, Modal } from 'react-bootstrap';

function DeleteModal(props) {
  function handleDelete() {
    props.deleteProduct(props.id);
    props.onHide();
  }
  return (
    <Modal show={props.show} onHide={props.onHide} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='alert alert-danger'>Are you sure want to delete?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='default' onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteModal;
