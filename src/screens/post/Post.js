import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MD from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

import SocialButtons from "components/SocialButtons";

import { posts, users } from "data/data";

import useWindowDimensions from "custom-hooks/useWindowDimensions";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className + " inline-code"} {...props}>
        {children}
      </code>
    );
  },
};

const Post = () => {
  const { id } = useParams();
  const { title, tags, userId, body } = posts.find(
    (post) => post.postId === +id
  );

  const author = users.find((user) => user.userId === userId);

  const relatedArticles = posts.filter((post) => {
    // we dont want to show current article in related articles.
    return +id !== post.postId && post.tags.some((tag) => tags.includes(tag));
  });

  const { width } = useWindowDimensions();

  return (
    <Container fluid="lg">
      <section className={`post ${width > 1200 ? "w-75" : ""}`}>
        <h2 className="post__title">{title}</h2>
        <p className="author-name">
          <strong>Yazar:</strong> {author.name}
        </p>
        <p>
          <span>
            <strong>etiketler:</strong>
          </span>
          {tags.map((tag) => (
            <Badge key={tag} className="mx-1">
              <Link to={"/search/" + tag}>{tag}</Link>
            </Badge>
          ))}
        </p>

        <SocialButtons url={window.location.href} />

        <MD
          components={components}
          children={body}
          linkTarget="_blank"
          rehypePlugins={[rehypeRaw]}
        />
      </section>

      {width > 1200 && (
        <aside className="card related-articles w-25">
          <div className="card-header">Benzer Yazılar</div>
          <ul className="list-group list-group-flush">
            {relatedArticles.map((article) => (
              <Link to={"/post/" + article.postId} key={article.postId}>
                <li className="list-group-item">{article.title}</li>
              </Link>
            ))}
          </ul>
        </aside>
      )}
    </Container>
  );
};

export default Post;
