import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { users, posts } from "data/data";

const UserList = () => {
  return (
    <Container fluid="lg">
      <section className="user-list">
        {
          users.map((user) => (
          <div className="user-wrapper" key={user.userId}>
            <div className="media">
              <div className="media-img-wrapper align-self-center mr-3">
                <Link to={"/user/" + user.userId}>
                  <img src={user.img} alt={user.name} />
                </Link>
              </div>
              <div className="media-body">
                <h4 className="mt-0">{user.name}</h4>
                <p className="mb-0">{user.userInfo}</p>
                <Link to={"/user/" + user.userId}>
                  <button className="btn btn-primary my-3">Profili Gör</button>
                </Link>
              </div>
            </div>
            <p>
              <strong>Yazıları:</strong>
            </p>
            {posts.map(
              (post) =>
                user.posts.includes(post.postId) && (
                  <Link to={"post/" + post.postId} key={post.postId}>
                    <p>{post.title}</p>
                  </Link>
                )
            )}
          </div>
        ))}
      </section>
    </Container>
  );
};

export default UserList;
