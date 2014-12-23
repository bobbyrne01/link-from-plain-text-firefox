function getText(){
  self.postMessage(window.getSelection().toString());
}

self.on("click", function () {
  getText();
});
