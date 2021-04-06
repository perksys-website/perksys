import React from 'react';
import Slider from "react-slick";
import firebase from './../../firebase';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImageSlider extends React.Component {
	constructor(props) {

		super(props);
		this.state = { users: [] }

	}


	componentDidMount() {
		firebase.database().ref("users").on("value", snapShot => {
			let user = [];
			snapShot.forEach(snap => {
				user.push(snap.val());
			});
			this.setState({ users: user });
		});
	}

	render() {
		const settings = {
			infinite: true,
			dots: true,
			speed: 1000,
			autoplay: true,
			slidesToShow: 2,
			slidestoScroll: 1,
			cssEase: "Linear",

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 964,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		return (
			<Slider {...settings} >
				{this.state.users.map(data => {
					return (
						<div className="testimonial-item position-relative" key={data.id}>
							<i className="ti-quote-left text-color"></i>

							<div className="testimonial-item-content">
								<p className="testimonial-text">{data.Testimonial}</p>

								<div className="testimonial-author">
									<h5 className="mb-0 text-capitalize">{data.Name}</h5>
									<p>{data.designation}</p>
								</div>
							</div>
						</div>
					)
				})}
			</Slider>
		);
	}
}

export default ImageSlider;