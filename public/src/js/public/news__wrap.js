document.querySelector(".news__wrap").querySelectorAll(".news-card").forEach(newsCard =>{
  src = newsCard.dataset.src;
  if (src == undefined) return;

  newsCard.style.background = `url("${src}") no-repeat `;
  newsCard.style.backgroundSize = "cover";
})