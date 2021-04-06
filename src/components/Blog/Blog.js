import React from 'react';
import firebase from './../../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useParams
} from "react-router-dom";
class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { blogs: [], id: this.props.match.params.id}
		//let {id} =this.props.match.params.id;
		//const { id } = this.props.params;

		//let {id} = 3;
	}
	  

	componentDidMount() {
		firebase.database().ref("blogs").on("value", snapShot => {
			let job = [];
			snapShot.forEach(snap => {
				job.push(snap.val());
			});
			this.setState({blogs:job});
		
		});
	}
	render() {
		return (
<div className="main-wrapper ">
<section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">News details</span>
          <h1 className="text-capitalize mb-4 text-lg">Blog</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">News details</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
	<section className="section blog-wrap bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
				{this.state.blogs.map(data => {
					if(data.id == this.state.id){
					return (
						
						<div className="col-lg-12 mb-5">
							<div className="single-blog-item">
								<img src={data.image} alt="" className="img-fluid rounded" />

								<div className="blog-item-content bg-white p-5">
									<div className="blog-item-meta bg-gray py-1 px-2">
										<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Creativity</span>
										<span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
										<span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
									</div> 

									<h2 className="mt-3 mb-4"><a href="blog-single.html">{data.title}</a></h2>
									<p>{data.description}</p>


								</div>
							</div>
						</div>
					)
					}
				})}
				
			</div>
		</div></div>
		</div>
	</section>
</div>
)
	}
}
	;
export default Blog;