import React from 'react';
import { Table } from 'react-bootstrap';
import { useGetAllUsersQuery } from '../../api';
import Loader from '../../components/Spinner';

const Buyers = () => {
  const { data: response, isLoading } = useGetAllUsersQuery();
  const data = response?.results?.filter(user => user.Roll === 'Buyer');
  return (
    <div>
      <h3 className='ml-3'>{data?.length === 0 ? 'No Buyer' : 'Buyers List'}</h3>
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
                </tr>
              </thead>
              <tbody>
                {data?.map(buyer => (
                  <tr key={buyer.id}>
                    <td>{buyer.id}</td>
                    <td>
                      <img src={buyer.img} width={40} height={40} alt='no_image' style={{ borderRadius: '50%' }} />
                    </td>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.Address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
};

export default Buyers;
