const removeHtmlFrom = (text) => {
  let txt = text;

  function removeTagWithSpaces() {
    const tagWithSpaces = txt.match(/<\w+(\s+\w+\W+[a-z0-9\W_]+\W|\s+\w+)+>/i);

    if (tagWithSpaces) {
      txt = txt.replace(tagWithSpaces[0], "");

      removeTagWithSpaces();
    } else return;
  }

  removeTagWithSpaces();

  const htmlRegex = /<\/*\w+\s*\/*>/g;

  return txt.replaceAll(htmlRegex, "");
};

export default removeHtmlFrom;
