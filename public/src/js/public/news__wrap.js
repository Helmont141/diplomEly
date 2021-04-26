document.querySelector(".news__wrap").querySelectorAll(".news-card").forEach(newsCard =>{
  let src = newsCard.dataset.src;
  if (src == undefined) return;
  
  switch (src) {
    case "0":
      newsCard.style.background = `url("/images/Fon-News.png") no-repeat `;
      newsCard.style.backgroundSize = "cover";
      console.log(src);
      break;

    case "1":
      newsCard.style.background = `url("/images/fon.jpg") no-repeat `;
      newsCard.style.backgroundSize = "cover";
      break;

    case "2":
      newsCard.style.background = `url("/images/Fon-News2.png") no-repeat `;
    newsCard.style.backgroundSize = "cover";
      break;

    default:
      break
  }
})