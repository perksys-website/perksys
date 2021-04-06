import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Home from './components/Home/Home'; //Include Footer

 
class App extends React.Component {
  
  render() {
    return (
    <div className="maincontainer">
		<Header></Header>
        <Footer></Footer>
    </div>
   )
  };
}

export default App;