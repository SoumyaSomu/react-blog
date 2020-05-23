import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import SingleArticle from './components/SingleArticle';
import Login from './components/Login';
import Signup from './components/Signup';
import * as serviceWorker from './serviceWorker';

const Home = () => {
	return <h1>This is the home page</h1>
}

const About = () => {
	return <h1>This is the about page</h1>
}

ReactDOM.render(
<Router>
	<div>
		<Navbar/>
		<Route exact path="/" component={Welcome}/>
		<Route path="/home" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/login" component={Login}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/articles/create" component={CreateArticle}/>
		<Route path="/article/:id" component={SingleArticle}/>
		<Footer />
	</div>
</Router>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
