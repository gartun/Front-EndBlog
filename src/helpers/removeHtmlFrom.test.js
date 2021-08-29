import removeHtmlFrom from './removeHtmlFrom';

describe('testing removeHtmlFrom helper => ', () => {
  it('removes html tags from a string', () => {
    const txt = 'this is a string';
    
    const tags = [
      `<p>${txt}</p>`,
      `<kbd>${txt}</kbd>`,
      `<br/>${txt}`,
      `<br />${txt}`,
      `<a href='https://Some-dummy.com'>${txt}</a>`,
      `<section class='many many-classes'>${txt}</section>`,
      `<article><section class='many many-many-classes'>${txt}</section></article>`,
      `<article class='a dummy-article'><section class='so many classes '><p>${txt}</p></section></article>`,
      `<div hidden>${txt}</div>`,
    ];
    
    tags.forEach(tag => {
      expect(removeHtmlFrom(tag)).toEqual(txt);
    })
  })
})