import React from "react";
import cart from "../images/Cart-add-icon.png"
import "../Style/Products.css"

function Product () {
    return(
        <div>
      <section className="col-12 row mt-5">
      <div> <span class="float-right"><h6>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></h6></span></div>
        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <h3 class="card__status">Price</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description is here</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
          <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Name:</h3>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
          <div className="col-lg-3 col-md-6 col-12">
          <ul class="cards">
            <li>
              <a href="" class="prod-card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src={cart}
                      alt="Add"
                    />
                    <div class="card__header-text">
                      <h4 class="card__title">Name:</h4>
                      <span class="card__status">Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    <p class="card__description">Description</p>
              
                    </div>
                    <div className="col-4">
                      <span>
                      View More
                      </span>
                    </div>
                  </div>
                 
                </div>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
      </section>

        </div>
        
    )
}

export default Product;