import React, { useEffect, useState } from 'react';
import { useAddOrderMutation, useGetBidByIdQuery, useGetBiddingListQuery, useGetProudctByIdQuery, useUpdateBidMutation } from '../api';
import '../Style/Bid.css';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { setBids, setCurrentBid, updateCurrentBid } from '../redux/reducers/global';
import { Button, OverlayTrigger, Popover, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const renderer = ({ hours, minutes, seconds, completed, props }) => {
  return (
    <div className='split row  mt-5 p-5' style={{ background: 'antiquewhite' }}>
      <div className=' col-6 text-center'>
        <h1>Hurry up to catch the ultimate sale on Bid</h1>
        {props.img && <img src={props.img} width={400} height={400} alt='Image_Loading' style={{ borderRadius: '30px' }} />}
      </div>
      <div className='col-6 card  ' style={{ maxHeight: '35rem' }}>
        <div className='row '>
          <div>
            <h4>Time Remaining</h4>
          </div>
        </div>
        <div className='row '>
          <div className='col-3'>
            <div>
              <h1 className='cards'>{hours}</h1>
            </div>
            <div>
              <h4>Hours</h4>
            </div>
          </div>
          <div className='col-3'>
            <div>
              <h1 className='cards'>{minutes}</h1>
            </div>
            <div>
              <h4>Minutes</h4>
            </div>
          </div>
          <div className='col-3'>
            <div>
              <h1 className='cards'>{seconds}</h1>
            </div>
            <div>
              <h4>Seconds</h4>
            </div>
          </div>
        </div>
        <div className='row '>
          {!completed && (
            <div className='col-6 mt-2'>
              <h6>Product Name:</h6>
              <p>{props.name}</p>
              <h6>Last Bid Price:</h6>
              <p>{props.product.Bidding_price}$</p>
              <h5>Enter Your Bid Price</h5>
              <input className='form-control' type='number' value={props.userInput} onChange={e => props.setUserInput(e.target.value)} />
              {props.activeUser ? (
                <button className='button btn btn-warning mt-2' type='button' onClick={() => props.updatePrice()}>
                  BID NOW
                </button>
              ) : (
                <OverlayTrigger trigger='click' placement='right' overlay={props.popover}>
                  <button className='button btn btn-warning mt-2' type='button'>
                    BID NOW
                  </button>
                </OverlayTrigger>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Bid() {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useGetBiddingListQuery();
  const [makeOrder] = useAddOrderMutation();
  const { bids, currentBid, currentCountdown } = useSelector(state => state.globalReducer);
  const { activeUser } = useSelector(state => state.authReducer);
  const [userInput, setUserInput] = useState(0);
  const [img, setImg] = useState();

  let date = new Date();
  let todayDate = date.toISOString().slice(0, 10);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = minutes.toString().padStart(2, '0');
  }
  let currentTime = hours + ':' + minutes + ':00';

  useEffect(() => {
    if (!isLoading && isSuccess) {
      dispatch(setBids(data));
      dispatch(setCurrentBid());
    }
  }, [isLoading, isSuccess]);

  const [updateBid, response] = useUpdateBidMutation();
  const { data: bidById, refetch: refetchById, isLoading: refetchLoading } = useGetBidByIdQuery(currentBid?.id);
  let { data: productDetails, isSuccess: productDetailsSucces } = useGetProudctByIdQuery(bidById?.product);

  useEffect(() => {
    if (!response.isLoading && response.isSuccess) {
      dispatch(updateCurrentBid(response.data));
    }
  }, [response]);

  useEffect(() => {
    if (productDetailsSucces) {
      setImg(productDetails.img);
    }
  }, [productDetailsSucces]);

  function updatePrice() {
    refetchById().then(res => {
      if (res) {
        if (userInput <= res.data.Bidding_price) {
          return toast.error('Please enter higher amount');
        } else if (currentTime >= bidById.Bidding_End) {
          toast.error('Sorry! Auction Ended');
        } else {
          updateBid({
            id: currentBid.id,
            Bidding_price: userInput,
            Buyer: activeUser.id,
            Bidding_status: 'Solded',
          });
          toast.success('Amount Added');
          setUserInput(0);
        }
      }
    });
  }

  function handleEnd() {
    toast.success('Auction Ended');
    updateBid({
      id: currentBid.id,
      Bidding_status: 'Solded',
    });
    dispatch(updateCurrentBid({}));
    refetchById().then(res => {
      console.log(res);
      if (res.data.Buyer) {
        makeOrder({ Adress: 'xyz', product_id: bidById.product, buyer_id: bidById.Buyer, order_date: date.toISOString().slice(0, 10) });
      }
    });
    productDetails = {};
  }
  const navigate = useNavigate();
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Header as='h3'>Login Required</Popover.Header>
      <Popover.Body>
        <div> in order to bid for this product you need to need to login</div>
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
  const todayBids = data?.filter(bid => bid.Bidding_date == todayDate);
  return (
    <>
      {currentCountdown ? (
        <Countdown date={currentCountdown} name={productDetails?.name} img={img} onComplete={handleEnd} userInput={userInput} renderer={renderer} product={currentBid} setUserInput={setUserInput} updatePrice={updatePrice} activeUser={activeUser} popover={popover} />
      ) : (
        <div className='split row mt-5 p-5' style={{ background: 'antiquewhite' }}>
          <div className=' col-6 text-center'>
            <h1>Stay Tuned for Bidding</h1>
            <p>Bidding will start soon</p>
            {todayBids?.length >= 1 && <h5>Today Auctions</h5>}
            {todayBids?.length >= 1 && (
              <Table>
                <thead>
                  <tr>
                    <th>Bid Start Time</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {todayBids?.map(bid => (
                    <tr key={bid.id}>
                      <td>{bid.Bidding_Start}</td>
                      <td>{bid.Bidding_Duration} Minutes</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
          <div className='col-6 card'>
            <div className='row justify-content-center'>
              <div className='col-3'>
                <div>
                  <h1 className='cards'>00</h1>
                </div>
                <div>
                  <h4>Hours</h4>
                </div>
              </div>
              <div className='col-3'>
                <div>
                  <h1 className='cards'>00</h1>
                </div>
                <div>
                  <h4>Minutes</h4>
                </div>
              </div>
              <div className='col-3'>
                <div>
                  <h1 className='cards'>00</h1>
                </div>
                <div>
                  <h4>Seconds</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Bid;
