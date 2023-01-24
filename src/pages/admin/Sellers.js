import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Trash3 } from 'react-bootstrap-icons';
import { useGetAllUsersQuery } from '../../api';
import Loader from '../../components/Spinner';
import DeleteUser from '../admin/DeleteUser';

const Sellers = () => {
  const { data: response, isLoading } = useGetAllUsersQuery();
  const data = response?.results?.filter(user => user.Roll === 'Seller');
  const [userId, setUserId] = useState();
  const [showDel, setShowDel] = useState(false);
  const onHide = () => setShowDel(false);
  return (
    <>
      <DeleteUser showDel={showDel} onHide={onHide} id={userId} />

      <div>
        <h3 className='ml-3'>{data?.length === 0 ? 'No Seller' : 'Seller List'}</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='container-fluid'>
            {data?.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Seller ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map(seller => (
                    <tr key={seller.id}>
                      <td>{seller.id}</td>
                      <td>
                        <img src={seller.img} width={40} height={40} alt='no_image' style={{ borderRadius: '50%' }} />
                      </td>
                      <td>{seller.name}</td>
                      <td>{seller.email}</td>
                      <td>{seller.Address}</td>
                      <td>
                        <div
                          onClick={() => {
                            setShowDel(true);
                            setUserId(seller.id);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Trash3 color='red' size='18' />
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

export default Sellers;
