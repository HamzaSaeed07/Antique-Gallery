import React from "react";
import "../Style/Bid.css";


function Bid() {
  return (
 
      <div class="split row mt-5 p-5" style={{ background: 'antiquewhite' }}>
        <div class=" col-6 text-center">
          <h1>Hurry up to catch the ultimate sale on iBid</h1>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
          </p>
          <button class="button btn btn-success">Auction is ending soon</button>
        </div>
        <div class="col-6 card">
          {/* <div class="card"> */}
            <div className="row justify-content-center">
              <div className="col-3">
                <div>  <h1 className="cards">00</h1> </div>
               <div> <h2>Hours</h2> </div>
               <div>
                <p>Total auctioneers : <span class="span">23</span></p>
              </div>
              </div>
              <div className="col-3">             
              <div>  <h1 className="cards">00</h1> </div>
              <div> <h2>Minutes</h2> </div>
              <div>
                <p>Total auctioneers : <span class="span">23</span></p>
              </div>
              </div>
              <div className="col-3">
              <div>  <h1 className="cards">00</h1> </div>
              <div> <h2>Seconds</h2> </div>
              <div >
                <p>
                  Buy Price : <span class="span">$359</span>
                </p>

              </div>
              </div>
              <button class="button btn btn-success">Start Bidding</button>
            </div>




          {/* </div> */}
        </div>

      </div>


  )
}
export default Bid;