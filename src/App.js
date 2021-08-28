import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./App.css";

import { Header, Footer, ToTopButton } from "./components/";

import {
  Home,
  Search
} from "./screens/";

const PostList = lazy(() => import("./screens/postlist/PostList"));
const UserList = lazy(() => import("./screens/UserList"));
const Post = lazy(() => import("./screens/post/Post"));
const User = lazy(() => import("./screens/User"));

const LoadingIndicator = (
  <Container fluid="lg">
    <h2>Bi' saniye...</h2>
  </Container>
);

const App = () => {

  return (
    <>
      <Header />

      <main>
        <Suspense fallback={ LoadingIndicator }>
          <Switch>
            <Route exact path="/" component={ Home } />
              <Route path="/post/:id" component={ Post } />
              <Route exact path="/user/:id" component={ User } />
              <Route exact path="/search/:word" component={ Search } />
              <Route exact path="/posts" component={ PostList } />
              <Route exact path="/users" component={ UserList } />
          </Switch>
        </Suspense>
      </main>
      
      <Footer />
      <ToTopButton />
    </>
  );
};

export default App;
