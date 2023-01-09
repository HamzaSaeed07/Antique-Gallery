import React from 'react';
import '../Style/Footer.css';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <section class=' cta-section mt-5 p-5'>
        <div class='container'>
          <div class='content'>
            <form class='subscription'>
              <input class='add-email m-0' type='email' placeholder='subscribe@me.now' />
              <button class='submit-email' type='button'>
                <span class='before-submit'>Subscribe</span>
                <span class='after-submit'>Thank you for subscribing!</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer class='footer mt-5' role='contentinfo'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 mb-4 mb-md-0'>
              <h2 class='section-heading2 mb-5'>Antique Gallery</h2>

              <p class='social mt-2'>
                <Link to='#'>
                  <FontAwesomeIcon icon='fa-brands fa-facebook' style={{ height: '40px' }} />
                </Link>
                <Link to='#'>
                  <FontAwesomeIcon icon='fa-brands fa-instagram' style={{ height: '40px' }} />
                </Link>
                <Link to='#'>
                  <FontAwesomeIcon icon='fa-brands fa-linkedin' style={{ height: '40px' }} />
                </Link>
                <Link to='#'>
                  <FontAwesomeIcon icon='fa-brands fa-github' style={{ height: '40px' }} />
                </Link>
              </p>
            </div>
            <div class='col-md-8 row p-4'>
              <div class='col-md-3'>
                <h3>Service</h3>
              </div>
              <div class='col-md-2 '>
                <h3>Blogs</h3>
              </div>
              <div class='col-md-2 '>
                <h3>Contact Us</h3>
              </div>

              <div class='col-md-4 '>
                <h3>Location: H-10 Islamabad</h3>
              </div>

              <div class='row text-center mt-5'>
                <div class='col-md-6'>
                  <p class='copyright'>&copy; Copyright Antique Gallery. All Rights Reserved</p>
                  <div class='credits'>
                    Designed by <Link href='#'>Hussain Sajid</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
