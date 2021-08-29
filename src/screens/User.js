import React from "react";
import { useParams } from "react-router";
import { GoMail } from "react-icons/go";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { posts as dataPosts, users } from "data/data";

const User = () => {
  const { id } = useParams();
  const { contact, name, img, userInfo, posts } = users.find(
    (user) => user.userId === +id
  );

  const postsOfUser = dataPosts.filter((dataPost) =>
    posts.includes(dataPost.postId)
  );

  return (
    <Container fluid="lg">
      <section>
        <h3 style={{
          textAlign: "center"
        }}>{name}</h3>
        <div className="user-img-wrapper">
          <img src={img} alt={name} />
        </div>
        <h4>Özet Bilgi</h4>
        <div className="user-profile__info">{userInfo}</div>
        <div className="aside-wrapper">
          <aside className="card mt-5">
            <div className="card-header">Bütün yazıları</div>

            <ul className="list-group list-group-flush">
              {
                postsOfUser.length > 0 ? (
                postsOfUser.map((post) => (
                  <Link to={"/post/" + post.postId} key={post.postId}>
                    <li className="list-group-item">{post.title}</li>
                  </Link>
                ))
              ) : (
                <li className="list-group-item">Post yok...</li>
              )}
            </ul>
          </aside>

          <aside className="card mt-5">
            <div className="card-header">İletişim Bilgileri</div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <GoMail /> {contact[0].email ?? "Kayıt Yok"}
              </li>
              <li className="list-group-item">
                <FaPhone /> {contact[0].phone ?? "Kayıt Yok"}
              </li>
              <li className="list-group-item">
                <FaTwitter /> {contact[0].social.twitter ?? "Kayıt Yok"}
              </li>
              <li className="list-group-item">
                <FaFacebook /> {contact[0].social.facebook ?? "Kayıt Yok"}
              </li>
              <li className="list-group-item">
                <FaInstagram /> {contact[0].social.instagram ?? "Kayıt Yok"}
              </li>
              <li className="list-group-item">
                <FaGithub /> {contact[0].social.github ?? "Kayıt Yok"}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </Container>
  );
};

export default User;
