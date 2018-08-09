var field = document.querySelector("input");

field.addEventListener("keypress", function (event) {
  let char = String.fromCharCode(event.charCode).toLocaleLowerCase();
  console.log(char);

  if(char === 'q' || char === 'w' || char === 'e') {
    event.preventDefault();
  }

});
