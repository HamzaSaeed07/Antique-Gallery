import '../Style/Detail.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAddOrderMutation, useGetProudctByIdQuery } from '../api';
import { useSelector } from 'react-redux';
import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
function Detail() {
  const { id } = useParams();
  const { data } = useGetProudctByIdQuery(id);
  const { activeUser } = useSelector(state => state.authReducer);
  const [makeOrder, response] = useAddOrderMutation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleBuy = () => {
    handleShow();
  };
  const todayDate = new Date().toISOString();
  const handleOrder = () => {
    if (activeUser.Roll === 'Buyer') {
      makeOrder({ Adress: activeUser?.Address, product_id: data?.id, buyer_id: activeUser.id, order_date: todayDate });
    }
    handleClose();
  };
  useEffect(() => {
    const handleResponse = () => {
      if (response.isSuccess && response.data) {
        toast.success('Orderd Complete');
      }
    };
    handleResponse();
  }, [response]);
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Header as='h3'>Login Required</Popover.Header>
      <Popover.Body>
        <div> in order to buy this product you need to need to login</div>
        <Button variant='info' size='sm' onClick={() => navigate('/login')}>
          Login
        </Button>
        <div>Click Register if you don't have account</div>
        <Button variant='success' size='sm' onClick={() => navigate('/register')}>
          Register
        </Button>
      </Popover.Body>
    </Popover>
  );
  return (
    <div class='container'>
      <Modal show={show} onHide={handleClose} size='sm' style={{ textAlign: 'center' }} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h6>Item: {data?.name}</h6>
            <h6>Price: {data?.price}</h6>
            <h6>Address: {activeUser?.Address}</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleOrder}>
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
      <div class='card'>
        <div class='container-fliud'>
          <div class='wrapper row'>
            <div class='preview col-md-6'>
              <div class='preview-pic tab-content'>
                <div class='tab-pane active' id='pic-1'>
                  <img alt='product_image_1' src={data?.img} />
                </div>
                <div class='tab-pane' id='pic-2'>
                  <img alt='product_image_2' src={data?.img} />
                </div>
                <div class='tab-pane' id='pic-3'>
                  <img alt='product_image_3' src={data?.img} />
                </div>
                <div class='tab-pane' id='pic-4'>
                  <img alt='product_image_4' src={data?.img} />
                </div>
                <div class='tab-pane' id='pic-5'>
                  <img alt='product_image_5' src={data?.img} />
                </div>
              </div>
              <ul class='preview-thumbnail nav nav-tabs'>
                <li class='active'>
                  <Link to='#' data-target='#pic-1' data-toggle='tab'>
                    <img alt='product_image' src={data?.img} />
                  </Link>
                </li>
                <li>
                  <Link to='#' data-target='#pic-2' data-toggle='tab'>
                    <img alt='product_image' src={data?.img} />
                  </Link>
                </li>
                <li>
                  <Link to='#' data-target='#pic-3' data-toggle='tab'>
                    <img alt='product_image' src={data?.img} />
                  </Link>
                </li>
                <li>
                  <Link to='#' data-target='#pic-4' data-toggle='tab'>
                    <img alt='product_image' src={data?.img} />
                  </Link>
                </li>
                <li>
                  <Link to='#' data-target='#pic-5' data-toggle='tab'>
                    <img alt='product_image' src={data?.img} />
                  </Link>
                </li>
              </ul>
            </div>
            <div class='details col-md-6'>
              <h3 class='product-title'>{data?.name}</h3>
              <div class='rating'>
                <div class='stars'>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star'></span>
                  <span class='fa fa-star'></span>
                </div>
                <span class='review-no'>41 reviews</span>
              </div>
              <p class='product-description'>{data?.Description}</p>
              <h4 class='price'>
                Price: <span>${data?.price}</span>
              </h4>
              <p class='vote'>
                <strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong>
              </p>
              <h5 class='sizes'>
                Status:
                <span class='size' data-toggle='tooltip' title='small'>
                  {data?.status}
                </span>
              </h5>
              <h5 class='colors'>
                Address:
                <span class='size' data-toggle='tooltip' title='small'>
                  {data?.address}
                </span>
              </h5>
              <h5 class='colors'>
                Date:
                <span class='size' data-toggle='tooltip' title='small'>
                  {data?.Publish_date}
                </span>
              </h5>

              <div class='action'>
                {activeUser ? (
                  <button class='add-to-cart btn btn-default' type='button' onClick={handleBuy}>
                    BUY NOW
                  </button>
                ) : (
                  <OverlayTrigger trigger='click' placement='right' overlay={popover}>
                    <button class='add-to-cart btn btn-default' type='button'>
                      BUY NOW
                    </button>
                  </OverlayTrigger>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
