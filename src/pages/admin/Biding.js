import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useGetBiddingListQuery } from '../../api';
import Loader from '../../components/Spinner';
import AddBid from './AddBid';
import DeleteBid from './DeleteBid';
import EditBid from './EditBid';

const Biding = () => {
  const { data, isLoading } = useGetBiddingListQuery();
  const [showAdd, setShowAdd] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState();
  return (
    <>
      <AddBid showAdd={showAdd} setShowAdd={setShowAdd} />
      <EditBid showEdit={showEdit} onHide={() => setShowEdit(false)} id={editId} />
      <DeleteBid showDel={showDel} onHide={() => setShowDel(false)} id={editId} />
      <div>
        <Button onClick={() => setShowAdd(true)} className='ml-3 px-4' variant='info'>
          + BID
        </Button>
        <hr />
        <h3 className='ml-3'>{data?.length === 0 ? 'No Bid' : 'Bidding List'}</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='container-fluid'>
            {data?.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Bid ID</th>
                    <th>Product</th>
                    <th>Bidding Date</th>
                    <th>Bidding Start</th>
                    <th>Duration</th>
                    <th>Bidding End</th>
                    <th>Bidding Status</th>
                    <th>Bidding Price</th>
                    <th>Buyer</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map(bid => (
                    <tr key={bid.id}>
                      <td>{bid.id}</td>
                      <td>{bid.product}</td>
                      <td>{bid.Bidding_date}</td>
                      <td>{bid.Bidding_Start}</td>
                      <td>{bid.Bidding_Duration}</td>
                      <td>{bid.Bidding_End}</td>
                      <td>{bid.Bidding_status}</td>
                      <td>{bid.Bidding_price}</td>
                      <td>{bid.Buyer}</td>
                      <td>
                        <div className='d-flex gap-3'>
                          <div
                            onClick={() => {
                              setShowEdit(true);
                              setEditId(bid.id);
                            }}
                          >
                            <PencilSquare color='blue' size={18} style={{ cursor: 'pointer' }} />
                          </div>
                          <div
                            onClick={() => {
                              setShowDel(true);
                              setEditId(bid.id);
                            }}
                          >
                            <Trash color='red' size={18} style={{ cursor: 'pointer' }} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Biding;
