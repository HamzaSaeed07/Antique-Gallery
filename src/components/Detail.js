import '../Style/Detail.css';
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery, useGetProudctByIdQuery } from '../api';
function Detail() {
  const { id } = useParams();
  const { data } = useGetProudctByIdQuery(id);
  console.log(data);
  return (
    <div class='container'>
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
                <button class='add-to-cart btn btn-default' type='button'>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
