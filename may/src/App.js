import {Router,Route,Switch } from 'react-router-dom';
import AdoptDog from "./components/AdoptDog";
import MainPage from "./components/MainPage";
import AdoptCat from './components/AdoptCat';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ContactPage from './components/ContactPage';
import CommentList from './components/CommentList';
import history from './history';
import DeleteComment from './components/DeleteComment';
import AdoptDetails from './components/AdoptDetails';
import Donation from './components/DobationPage';


const App=()=>{
    return (
        <div className="ui container">
            <Router history={history}>
            <Header/>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/adopt/dog" component={AdoptDog} exact/>
                <Route path="/adopt/cat" component={AdoptCat} exact/>
                <Route path="/adopt/about-us" component={AboutUs} exact/>
                <Route path="/adopt/contact-us" component={ContactUs} exact/>
                <Route path="/adopt/contactpage" component={ContactPage} exact/>
                <Route path="/adopt/donate" component={Donation} exact/>
                <Route path="/adopt/comment-list" component={CommentList} exact/>
                <Route path="/adopt/comment-delete/:id" component={DeleteComment}exact/>
                <Route path="/adopt/:id" component={AdoptDetails}exact/>
            </Switch>
            <Footer/>
            
            </Router>
            
        </div>
    )
};

export default App;