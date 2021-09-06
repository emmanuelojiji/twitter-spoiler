window.onload = () => {
  const dots = document.querySelector(".dots");
  const popup = document.querySelector(".popup");

  dots.onclick = () => {
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.maxHeight = "auto";
    }, 1000);

  };

  window.onclick = (event) => {
    if (event.target !== popup) {
        console.log("outside box")
    }
  }


 
};
