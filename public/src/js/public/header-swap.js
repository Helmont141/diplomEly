const product = document.querySelector(".product");
const news = document.querySelector(".news");
const about = document.querySelector(".about");
const kontacts = document.querySelector(".kontacts");

document.querySelectorAll(".header__bar").forEach(bar => {
  bar.querySelectorAll(".header__bar-item").forEach(item => {
    item.onclick = () => {
      const key = item.dataset.url;

      switch (key) {
        case "/":
          product.style.display = "block";
          news.style.display = "block";
          about.style.display = "none";
          kontacts.style.display = "none";
          break;

        case "/about":
          product.style.display = "none";
          news.style.display = "none";
          kontacts.style.display = "none";
          about.style.display = "block";
          break;

        case "/kontacts":
          product.style.display = "none";
          news.style.display = "none";
          about.style.display = "none";
          kontacts.style.display = "block";
          break;

        default:
          break
      }
    }
  })
})