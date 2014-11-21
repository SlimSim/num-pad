Polymer("num-pad", {
  ready: function(){
    this.value = parseInt(this.value) || 5;
    var aPaperButtons = this.shadowRoot.querySelectorAll('.butt');
    var select = this.value==0?aPaperButtons.length: this.value;
    select-=1;
    aPaperButtons[select].setAttribute('raised', true);




    if(this.columns){
      switch (parseInt(this.columns)){
      case 5:
        this.style.maxWidth = "548px";
        this.style.minWidth = "458px";
        break;
      case 4:
        this.style.maxWidth = "457px";
        this.style.minWidth = "366px";
        this.visualiseDiv('.four');
        break;
      case 3:
        this.style.maxWidth = "365px";
        this.style.minWidth = "275px";
        this.visualiseDiv('.three');
        break;
      case 2:
        this.style.maxWidth = "274px";
        this.style.minWidth = "183px";
        break;
      case 1:
        this.style.maxWidth = "182px";
        this.style.minWidth = "90px";
      }
    }



  },
  select: function(a, b, c){
    var aPaperButtons = this.shadowRoot.querySelectorAll('paper-button')
    for (var i=0; i<aPaperButtons.length; i++){
      aPaperButtons[i].removeAttribute('raised');
    }
    c.setAttribute('raised', true);
    this.value = parseInt(c.innerText);
  },
  visualiseDiv: function(strNumber){
        var aDiv = this.shadowRoot.querySelectorAll(strNumber);
        for(var i=aDiv.length; i-->0 ; ){
          aDiv[i].style.display = "block";
        }
  }
});

