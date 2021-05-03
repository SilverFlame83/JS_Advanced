function getArticleGenerator(articles) {

    return () => {
        if(articles.length !== 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            const webDiv = document.getElementById("content");
            webDiv.appendChild(article);
        }
    }
}
