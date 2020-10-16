import React from 'react';
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import Home from "./screens/Home";
import PostList from "./screens/PostList";
import UserList from "./screens/UserList";
import Post from "./screens/Post";
import User from "./screens/User";
import Search from "./screens/Search";

const App = () => {
    return ( 
    <>
        <Header />
        <ToTopButton />
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route exact path="/user/:id" component={User} />
                <Route exact path="/search/:word" component={Search} />
                <Route exact path="/posts" component={PostList} />
                <Route exact path="/users" component={UserList} />
            </Switch>
        </main>
        <Footer />
    </>
    )
}

export default App