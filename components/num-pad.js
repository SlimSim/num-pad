Polymer("num-pad", {
  ready: function(){
    this.special = typeof this.special != 'undefined'? this.special: "0";
    this.value = typeof this.value != 'undefined'? parseInt(this.value): 1;
  },
  select: function(a, b, c){
    this.value = c.getAttribute('value');
  },
  valueChanged: function(){
    var aPaperButtons = this.shadowRoot.querySelectorAll('paper-button')
    for (var i=0; i<aPaperButtons.length; i++){
      aPaperButtons[i].removeAttribute('raised');
      if(parseInt(aPaperButtons[i].getAttribute('value') ) == this.value){
        aPaperButtons[i].setAttribute('raised', true);
      }
    }
  }
});


