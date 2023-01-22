import React, { useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useAddCategoryMutation, useDeleteCategoryMutation, useEditCategoryMutation, useGetCategoriesQuery } from '../../api';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import '../../App.css';
import Loader from '../../components/Spinner';

const Category = () => {
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState();
  const [editText, setEditText] = useState('');
  const { data, isLoading } = useGetCategoriesQuery();
  const [addCategory, response] = useAddCategoryMutation();
  const [deleteCategory, deleteResponse] = useDeleteCategoryMutation();
  const [editCategory, editResponse] = useEditCategoryMutation();
  const handleAdd = e => {
    e.preventDefault();
    addCategory({ category_name: text });
    setText('');
  };
  const handleDelete = id => {
    if (window.confirm('Are you sure want to delete?')) {
      deleteCategory(id);
    }
  };
  const handleEdit = e => {
    e.preventDefault();
    editCategory({ id: isEdit, category_name: editText });
    setIsEdit(null);
  };
  return (
    <>
      <form onSubmit={handleAdd} className='d-flex align-items-center gap-2 mb-2'>
        <input placeholder='Type Category Name' required value={text} className='pl-2' onChange={e => setText(e.target.value)} />
        <button type='submit' className='btn btn-info btn-sm px-4'>
          {response.isLoading ? <Spinner as='span' animation='border' variant='warning' size='sm' /> : 'ADD'}
        </button>
      </form>
      {deleteResponse.isLoading && <Spinner className='mb-1' style={{ marginLeft: '3.5rem' }} animation='border' variant='warning' size='sm' />}
      {editResponse.isLoading && <Spinner className='mb-1' style={{ marginLeft: '1rem' }} animation='border' variant='warning' size='sm' />}
      {isLoading ? (
        <Loader />
      ) : (
        data?.results.map(cat => (
          <ListGroup key={cat.id} className='mb-1'>
            <ListGroup.Item as='li'>
              {cat.id === isEdit ? (
                <form onSubmit={handleEdit}>
                  <input placeholder='Type Category Name' required value={editText} className='pl-2' onChange={e => setEditText(e.target.value)} />
                </form>
              ) : (
                <h6>{cat.category_name}</h6>
              )}
              <div className='d-flex align-items-center gap-3 pt-1 '>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setIsEdit(cat.id);
                    setEditText(cat.category_name);
                  }}
                >
                  <PencilSquare size={18} color='blue' />
                </div>
                <div onClick={() => handleDelete(cat.id)} style={{ cursor: 'pointer' }}>
                  <Trash size={18} color='red' />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))
      )}
    </>
  );
};

export default Category;
