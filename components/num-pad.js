Polymer("num-pad", {
  ready: function(){

  },
  select: function(a, b, c){
    var aPaperButtons = this.shadowRoot.querySelectorAll('paper-button')
    for (var i=0; i<aPaperButtons.length; i++){
      aPaperButtons[i].removeAttribute('raised');
    }
    c.setAttribute('raised', true);

  }
});

