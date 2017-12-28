namespace unionTypes {
  type test = boolean | Article;

  class Article {
    static articles: Array<Article> = [];

    static submit(article: Article): test {
      if (Article.articles.length >= 1) {
        return article;
      } else {
        Article.articles.push(article);
        return true;
      }
    }

    constructor(public text: string) {}
  }

  const bool: test = Article.submit(new Article('It was the best of times'));
  const obj: test = Article.submit(new Article('Not my best work'));

  console.log(bool);
  console.log(obj);
  console.log(Article.articles);
}
