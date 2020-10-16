import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from "../data/data";

const PostList = () => {
    return (
        <section className="post-list">
           {posts.map(post =>   
               <div className="card" key={post.postId}>
                   <div className="card-img-wrapper">
                    <img className="card-img-top img-fluid" src={post.img} alt={post.title} />
                   </div> 
                   <div className="card-body">
                       <h4 className="card-title">{post.title}</h4>
                       <p className="card-text">{post.body.substr(0, 100) + "..."}</p>
                       <p className="text-muted">  
                            {`Okuma süresi: yaklaşık 
                               ${Math.ceil(post.body.split(" ").length / 225)} dakika`
                           } 
                       </p>
                       <Link to={"/post/" + post.postId} >
                       <button className="btn btn-primary">Okumaya Devam Et</button>
                       </Link>
                   </div>
               </div>
           )} 
        </section>
    )
}

export default PostList
