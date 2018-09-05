function gennum() {
    var text = "";
    var text ="";
    var possible = "ACDFGHJKLMNOPQRSTW";
    text += possible.charAt(Math.floor(Math.random() * 18));
    text += possible.charAt(Math.floor(Math.random() * 18));
    text += "-";
    text += String.fromCharCode(48+Math.floor(Math.random() * 10));
    text += String.fromCharCode(48+Math.floor(Math.random() * 10));
    text += String.fromCharCode(48+Math.floor(Math.random() * 10));
    text += String.fromCharCode(48+Math.floor(Math.random() * 10));
    
    return text;
  }

  