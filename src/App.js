import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.css";

import {Header, Footer, ToTopButton} from "./components/";

import {
    Home,
    // PostList,
    // UserList,
    // Post,
    // User,
    Search
} from "./screens/";

const PostList = React.lazy(() => import("./screens/postlist/PostList"));
const UserList = React.lazy(() => import("./screens/UserList"));
const Post = React.lazy(() => import("./screens/post/Post"));
const User = React.lazy(() => import("./screens/User"));

const App = () => {
    return ( 
    <>
        <Header />

        <main>
        <React.Suspense fallback={<h4>Loading...</h4>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route exact path="/user/:id" component={User} />
                <Route exact path="/search/:word" component={Search} />
                <Route exact path="/posts" component={PostList} />
                <Route exact path="/users" component={UserList} />
            </Switch>
        </React.Suspense>
        </main>
        <Footer />
        <ToTopButton />
    </>
    )
}

export default App