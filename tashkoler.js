/*
 * Tashkoler
 * Give your Arabic text a colored tashkeel.
 * Copyright (C) 2016 Hakim DAHOUNE (http://hakim.ma, @7akim_d)
 */

var tashkoler = (function (){

  function harakat ( target = "p", color = "#0FF", size = "1em" ) {
    // Create the tashkeel styles CSS class (.tashkoler)
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.tashkoler haraka { color: ' + color + '; font-size: ' + size + '; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    // Define the DOM target to apply the colored tashkeel.
    var bind = document.querySelector(target);
    bind.className += " tashkoler";
    var text = document.querySelector(target).innerHTML;
    text = text.replace(/ٌ|ّ|ٍ|ُ|َ|ِ|ً/gi, function checkStr(x,y){
      return "&zwj;<haraka>"+x+"</haraka>&zwj;";
    });
    text = text.replace(/&zwj; /gi, function checkStr(x) {  console.log("+");return " ";});

    // Apply the colored taskeel.
    bind.innerHTML = text;
  }
  
  return {
    harakat: harakat
  };
  
})();
