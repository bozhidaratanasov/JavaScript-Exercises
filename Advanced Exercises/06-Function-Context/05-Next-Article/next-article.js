function getArticleGenerator(articles) {
  let contentDiv = document.querySelector('#content');

  return () => {
    if (articles.length > 0 ) {
      let article = document.createElement('article');
      article.textContent = articles.shift();
      contentDiv.appendChild(article);
    }
  }
}
