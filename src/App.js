import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import { Header, Footer, ToTopButton } from "./components/";

import {
  Home,
  Search
} from "./screens/";

const PostList = React.lazy(() => import("./screens/postlist/PostList"));
const UserList = React.lazy(() => import("./screens/UserList"));
const Post = React.lazy(() => import("./screens/post/Post"));
const User = React.lazy(() => import("./screens/User"));

const LoadingIndicator = () => (
  <Container fluid="lg">
    <h2>Bi' saniye...</h2>
  </Container>
);

const App = () => {
  return (
    <>
      <Header />

      <main>
        <React.Suspense fallback={LoadingIndicator}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Container fluid="lg">
              <Route path="/post/:id" component={Post} />
              <Route exact path="/user/:id" component={User} />
              <Route exact path="/search/:word" component={Search} />
              <Route exact path="/posts" component={PostList} />
              <Route exact path="/users" component={UserList} />
            </Container>
          </Switch>
        </React.Suspense>
      </main>
      
      <Footer />
      <ToTopButton />
    </>
  );
};

export default App;
