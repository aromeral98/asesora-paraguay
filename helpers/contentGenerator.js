export const generateArticle = (article) => {
  let html = '';
  if (article) {
    const entries = Object.entries(article['article']);
    for (let i = 0; i < entries.length; i++) {
      console.log(Object.keys(entries[i]))
      const [key, value] = entries[i];
      const [nextKey, nextValue] = entries[i + 1] || [];
      const [nextSecondKey, nextSecondValue] = entries[i + 2] || [];
      if (key.startsWith('title')) {
        html += `<h2 class="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">${value}</h2>`;
      } else if (key.startsWith('paragraph')) {
        if (nextKey?.startsWith('strong') && nextSecondKey?.startsWith('paragraph')) {
          i = i + 3
          html += `<p class="text-dark lg:text-lg">${value}<strong>${nextValue}</strong>${nextSecondValue}</p>`;
        } else if(nextKey?.startsWith('strong')){
          i = i + 2
          html += `<p class="text-dark lg:text-lg">${value}<strong>${nextValue}</strong></p>`;
        } else {
          html += `<p class="text-dark lg:text-lg">${value}</p>`;
        }
      } else if (key.startsWith('image')) {
        html += `<Image width=100% src=${value.src} alt=${value.alt} title=${value.alt} className="card__img" />`;
      }
      else if (key.startsWith('anchor')) {
        html += `<Link passHref href=${value.href} aria-value=${value.title} className="link" >${value.text}</Link>`;
      }
    }
  }
  return html;
}
