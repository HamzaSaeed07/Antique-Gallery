import "../Style/Detail.css"
import pic1 from "../images/pic1.jpg"
function Detail(){
    return(
        <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={pic1} /></div>
						  <div class="tab-pane" id="pic-2"><img src={pic1}/></div>
						  <div class="tab-pane" id="pic-3"><img src={pic1} /></div>
						  <div class="tab-pane" id="pic-4"><img src={pic1} /></div>
						  <div class="tab-pane" id="pic-5"><img src={pic1} /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={pic1} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={pic1} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={pic1} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={pic1} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={pic1} /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">Product Title</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">Product Description will be here</p>
						<h4 class="price">Price: <span>$180</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">Status:
							<span class="size" data-toggle="tooltip" title="small">Status</span>
						
						</h5>
						<h5 class="colors">Address:
                        <span class="size" data-toggle="tooltip" title="small">Address</span>
						</h5>
                        <h5 class="colors">Date:
                        <span class="size" data-toggle="tooltip" title="small">12-02-2022</span>
						</h5>
                  
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )

}
export default Detail