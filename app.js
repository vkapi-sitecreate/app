class init {

  constructor(stady) {
    this.stady = stady;
  }
  DOM() {
  	if (this.stady == "ready") {
  		document.body.innerHTML = '<header id="header"></header><nav id="nav"></nav><main id="main"></main><aside id="aside"></aside><footer id="footer"></footer>';
  		document.body.style.display = "grid";
  		var header = document.getElementById('header'),
  			nav = document.getElementById('nav'),
  			main = document.getElementById('main'),
  			aside = document.getElementById('aside'),
  			footer = document.getElementById('footer');
  		
  	}
  }

}
let commands = new init("ready");

window.onload = function () {
	commands.DOM();
	header.innerHTML = '<h1>Work</h1>';
}
