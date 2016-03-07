
function setup (){
  newText = document.getElementById("text");
  oldText = document.getElementById("box");
  newText.addEventListener('input', writeText);
}
writeText = function(e){
  oldText.style.backgroundColor = this.value;
};
