import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { BrowserRouter } from "react-router-dom";
import { posts } from "../../data/data";

import PostList from "./PostList";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Lists the posts", () => {
  act(() => {
    render(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>,
      container
    );
  });

  for (let i = 0; i < posts.length; i++) {
    expect(container.querySelectorAll(".card-title")[i].textContent).toBe(
      posts[i].title
    );
  }
});
