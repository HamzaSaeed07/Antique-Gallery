import React from "react";
import Hero from "../images/hero-img.jpg";
import "../Style/Home.css";
import Subhero from "../images/design.png";
import Subhero2 from "../images/design.png";
import advertisment from "../images/Offer-banner.0.jpg";
import Footer from "./Footer";

function Home() {
  return (

    <div>
      <section className="hero ">
        <div>
          <img src={Hero} alt="Snow" style={{ width: "100%" }} />
          <div class="bottom-left">Description and Button</div>
        </div>

        <div className="row rola ">
          <div className="col-6">
            <img src={Subhero2} />
          </div>
          <div className="col-6 ">
            <img src={Subhero} />
          </div>
        </div>
      </section>

      <section className="advertisment col-10">
        <div className="service col-12 row">
          <div className="col-3">service 1</div>
          <div className="col-3">service 2</div>
          <div className="col-3">service 3</div>
          <div className="col-3">service 4</div>
        </div>
        <div className="think">
          {/* <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}
        </div>
      </section>
      <section className="products col-12 row mt-5">
        <div className="product-card col-3">
          <ul class="cards">
            <li>
              <a href="" class="card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                  alt=""
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src="https://i.imgur.com/7D7I6dI.png"
                      alt=""
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Jessica Parker</h3>
                      <span class="card__status">1 hour ago</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="product-card col-3">
          <ul class="cards">
            <li>
              <a href="" class="card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                  alt=""
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src="https://i.imgur.com/7D7I6dI.png"
                      alt=""
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Jessica Parker</h3>
                      <span class="card__status">1 hour ago</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="product-card col-3">
          <ul class="cards">
            <li>
              <a href="" class="card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                  alt=""
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src="https://i.imgur.com/7D7I6dI.png"
                      alt=""
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Jessica Parker</h3>
                      <span class="card__status">1 hour ago</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="product-card col-3">
          <ul class="cards">
            <li>
              <a href="" class="card">
                <img
                  src="https://i.imgur.com/oYiTqum.jpg"
                  class="card__image"
                  alt=""
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img
                      class="card__thumb"
                      src="https://i.imgur.com/7D7I6dI.png"
                      alt=""
                    />
                    <div class="card__header-text">
                      <h3 class="card__title">Jessica Parker</h3>
                      <span class="card__status">1 hour ago</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="recommended ">
        <div className="sub-ads col-10 row">
          <div className="sub-ad1 col-12">
            <img src={advertisment} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
