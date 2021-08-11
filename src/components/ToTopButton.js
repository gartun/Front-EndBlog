import React, { useEffect } from "react";

const showOrHideBtn = () => {
  const winHeight = window.screen.availHeight;
  const pageBottom = window.pageYOffset + winHeight;
  if (pageBottom > winHeight + 150) {
    document.querySelector(".to-top-btn").classList.add("show");
  } else {
    document.querySelector(".to-top-btn").classList.remove("show");
  }
};

const ToTopButton = () => {
  useEffect(() => {
    window.addEventListener("scroll", showOrHideBtn);
    return () => {
      window.removeEventListener("scroll", showOrHideBtn);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={toTop}
      className="btn btn-warning to-top-btn rounded-circle"
    >
      <span className="sr-only">
        Bu butona basıldığında sayfanın başına dönülür.
      </span>
      {"\u{005E}"}
    </button>
  );
};

export default ToTopButton;
