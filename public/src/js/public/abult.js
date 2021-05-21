document.querySelectorAll('.adult').forEach(adult => {
  adult.querySelector('.adult__btn_green').onclick = () =>{
    // alert(1);
    adult.style.display = "none";
  }
})