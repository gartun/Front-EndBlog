import React from 'react';
import { Switch, Route} from "react-router-dom";
import "./App.css";

import {Header, Footer, ToTopButton} from "./components/";

import {
    Home,
    PostList,
    UserList,
    Post,
    User,
    Search
} from "./screens/";

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