export const generateArticle = (article) => {
    let html = '';
    if (article) {
      for (const [key, value] of Object.entries(article['article'])) {
        if (key.startsWith('title')) {
          html += `<h2 class="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">${value}</h2>`;
        } else if (key.startsWith('paragraph')) {
          html += `<p class="text-dark lg:text-lg">${value}</p>`;
        } else if (key.startsWith('image')) {
          html += `<img src=${value.src} alt=${value.alt} />`;
        }
      }
    }
    return html;
}
