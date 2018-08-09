function getTab(node) {
    var tabName = node.getAttribute('data-tabname');
    var element = document.getElementsByClassName(tabName);
    var tabs = document.getElementsByClassName('tab');
	var buttons = document.querySelectorAll("div[data-tabname]");

	for(i in buttons) {

    }
}



tabName.addEventListener("click", function (event) {
   console.log(event);
});
