import React from 'react';
import firebase from './../../firebase';

class Blogs extends React.Component {
    constructor(props) {

        super(props);
        this.state = { blogs: [] }

    }

    componentDidMount() {
        firebase.database().ref("blogs").on("value", snapShot => {
            let blog = [];
            snapShot.forEach(snap => {
                blog.push(snap.val());
            });
            this.setState({ blogs: blog });
        });
    }
    render() {
        return (
            <div className="row justify-content-center">
                {this.state.blogs.map(data => {
                    return (
                    <div className="col-lg-4 col-md-6 mb-5" key= {data.id}>
                        <div  className="card bg-transparent border-0">
                        <img src={data.image} alt="" className="img-fluid rounded" />
                            <div className="card-body mt-2">
                                <div className="blog-item-meta">
                                    <a className="text-white-50">{data.category1}<span className="ml-2 mr-2">/</span></a>
                                    <a className="text-white-50">{data.category2}<span className="ml-2">/</span></a>
                                    <a className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>{data.category3}</a>
                                </div>
                                <h3 className="mt-3 mb-5 lh-36"><a className="text-white ">{data.title}</a></h3>
                                <a href={"/blog/"+data.id} className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                            </div>
                        </div>
                    </div>
                    )}
                )}

            </div>
        )
    }
}
export default Blogs;