import { useDispatch } from 'react-redux';
import { changeCurrentPage } from '../redux/reducers/global';

const Pagination = ({ count, pageCurrent }) => {
  const pages = Array.from({ length: Math.ceil(count / 8) }, (_, i) => i + 1);
  const dispatch = useDispatch();

  const changeCurrentPageNumberInc = () => {
    if (pageCurrent < pages.length) {
      dispatch(changeCurrentPage(pageCurrent + 1));
    }
  };

  const changeCurrentPageNumberDec = () => {
    if (pageCurrent > 1) {
      console.log(true);
      dispatch(changeCurrentPage(pageCurrent - 1));
    }
  };

  const handleChangeCurrentPage = page => {
    dispatch(changeCurrentPage(page));
  };
  return (
    <div aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <button onClick={changeCurrentPageNumberDec} className='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </button>
        </li>

        {pages.map(page => (
          <li key={page} className='page-item'>
            <button className='page-link' onClick={() => handleChangeCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}
        <li className='page-item'>
          <button onClick={changeCurrentPageNumberInc} className='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
            <span className='sr-only'>Next</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
