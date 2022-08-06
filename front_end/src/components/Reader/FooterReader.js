import React from 'react'
import "./readerStyle.css";
export default function FooterReader() {
  return (
	<div className="footer_agileinfo_w3">
		<div className="footer_inner_info_w3ls_agileits" style={{display: 'flex'}}>
			<div className="col-md-3 footer-left">
				<h2><a href="index.html"><span>D</span>owny Shoes </a></h2>
				<p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
				<ul className="social-nav model-3d-0 footer-social social two">
					<li>
						<a href="#" className="facebook">
							<div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
							<div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div>
						</a>
					</li>
					<li>
						<a href="#" className="twitter">
							<div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
							<div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div>
						</a>
					</li>
					<li>
						<a href="#" className="instagram">
							<div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
							<div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div>
						</a>
					</li>
					<li>
						<a href="#" className="pinterest">
							<div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
							<div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
						</a>
					</li>
				</ul>
			</div>
			<div className="col-md-9 footer-right">
				<div className="sign-grds" style={{display: 'flex'}}>
					<div className="col-md-4 sign-gd">
						<h4>Our <span>Information</span> </h4>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="404.html">Services</a></li>
							<li><a href="404.html">Short Codes</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>

					<div className="col-md-5 sign-gd-two">
						<h4>Store <span>Information</span></h4>
						<div className="address">
						
							<div className="address-grid">
								<div className="address-left">
									<i className="fa fa-envelope" aria-hidden="true"></i>
								</div>
								<div className="address-right">
									<h6>Email Address</h6>
									<p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="address-grid">
								<div className="address-left">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
								</div>
								<div className="address-right">
									<h6>Location</h6>
									<p>Broome St, NY 10002,California, USA.

									</p>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
					<div className="col-md-3 sign-gd flickr-post">
						<h4>Flickr <span>Posts</span></h4>
						<ul>
							<li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
							<li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
						</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="clearfix"></div>

			
		</div>
	
	</div>
  )
}
