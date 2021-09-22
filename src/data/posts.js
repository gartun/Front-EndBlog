import {
  adobeIntroPost,
  htmlCssIntro,
  jsIntro,
  sassOverview,
  asyncFetching,
  designPlanning,
  reactHooksIntro,
  whatIsSEO,
  responsiveDesign,
  intObserver,
  reactOptimization,
} from "./posts-folder/";

// markdown-it converts markdown to html
// we use this function to strip html tags.
import removeHtmlFrom from "helpers/removeHtmlFrom";

const mdIt = require("markdown-it")({
  html: true,
});

/*
#############################
UTIL FUNCS START
#############################
*/

function isParag(line) {
  const trimmed = line.trim(),
    len = trimmed.length;

  return len > 0 && !/^[0-9#\-(```)]/.test(trimmed);
}
/*
#############################
UTIL FUNCS END
#############################
*/

// we use a constructor function(class) to create post instances
export class Post {
  constructor(title, tags, postId, img, userId, body) {
    this.title = title;
    this.tags = tags || [];
    this.postId = postId;
    this.img = img;
    this.userId = userId;
    this.body = body;
  }

  getIntro() {
    const txt = this.body.split(/\n/).find((line) => isParag(line));
    const len = txt.length,
      startingIndex = len > 120 ? 120 : len / 2,
      endingIndex = txt.indexOf(" ", startingIndex);

    // here we convert markdown to html with the help of markdown it
    const mdText = mdIt.render(txt);

    // then we return the converted text with its html tags stripped
    return removeHtmlFrom(mdText).substring(0, endingIndex) + "...";
  } /* getIntro ending */

  getReadingTime() {
    let wholeText = "";

    for (let el of this.body.split(/\n/)) {
      if (el === "") continue;
      if (isParag(el)) wholeText += el + " ";
    }

    return Math.ceil(wholeText.split(" ").length / 225) + 2;
  } /* getReadingTime ending */
} /* Class ending */

/*
function Post(title, tags, postId, img, userId, body) {
  this.title = title;
  this.tags = tags || [];
  this.postId = postId;
  this.img = img;
  this.userId = userId;
  this.body = body;
}

Post.prototype.getIntro = function () {

  const len = txt.length,
        startingIndex = len <= 120 ? len / 2 : 120,
        endingIndex = txt.indexOf(" ", startingIndex);
  
  // here we convert markdown to html with the help of markdown it
  const mdText = mdIt.render(txt);

  
}

Post.prototype.getReadingTime = function () {
  var _wholeText = "";

  for (let el of this.body.split(/\n/)) {
    if (isParag(el)) wholeText += el + " ";
  }

  return Math.ceil(wholeText.split(" ").length / 225) + 2;
};
*/

const posts = [
  adobeIntroPost(Post),
  htmlCssIntro(Post),
  jsIntro(Post),
  sassOverview(Post),
  asyncFetching(Post),
  designPlanning(Post),
  reactHooksIntro(Post),
  whatIsSEO(Post),
  responsiveDesign(Post),
  intObserver(Post),
  reactOptimization(Post),
];

export default posts;
