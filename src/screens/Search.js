import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { posts } from "data/data";

const Search = () => {
  const { word } = useParams();
  const selectedPosts = posts.filter((post) => post.tags.includes(word));
  const control = selectedPosts.length === 0;

  return (
    <Container fluid="lg">
      <section className="search-results">
        <h2
          style={{
            textAlign: "center",
            color: "#0034bc",
            paddingBottom: ".5em",
            borderBottom: "1px solid darkgray",
            marginTop: "1.2em",
          }}
        >
          Arama Sonuçları
        </h2>
        {control ? (
          <h2 style={{ textAlign: "center", marginTop: "2em" }}>
            {word} kelimesine uygun sonuç bulunamadı...
          </h2>
        ) : (
          selectedPosts.map((post) => (
            <div key={post.postId}>
              <div className="media">
                <div className="media-body">
                  <h4 className="mt-0">{post.title}</h4>
                  <p className="mb-0">{post.getIntro()}</p>
                  <Link to={"/post/" + post.postId}>
                    <button className="btn btn-primary my-3">
                      Okumaya devam et
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </Container>
  );
};

export default Search;
