document.querySelectorAll(".product-card").forEach(card =>{
  let popUpContent = card.dataset.popup;
  card.onclick = () =>{
    $(".toPopUp").append(popUpContent);

    document.querySelectorAll('.toPopUp').forEach(popup => {
      popup.querySelector('.product-full__close').onclick = () => {
        $(".toPopUp").empty();
      }
    });
  }

});