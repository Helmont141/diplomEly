document.querySelector(".news__wrap").querySelectorAll(".news-card").forEach(newsCard =>{
  src = newsCard.dataset.src;
  if (src == undefined) return;
  // 
  if (src%2 == 0) {
    newsCard.style.background = `url("/images/Fon-News.png") no-repeat `;
    newsCard.style.backgroundSize = "cover";
  } else {
    newsCard.style.background = `url("/images/Fon-News2.png") no-repeat `;
    newsCard.style.backgroundSize = "cover";
  }


})