/*!
 * Tashkoler
 * Give your Arabic text a colored tashkeel.
 * Copyright (C) 2016 Hakim DAHOUNE (http://hakim.ma, @7akim_d)
 */

var tashkoler = (function (){

  function harakat ( target = "p", color = "#0FF", size = "1.9em" ) {
    // Create the tashkeel styles CSS class (.taskoler)
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.tashkoler { color: ' + color + '; font-size: ' + size + '; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    // Define the DOM target to apply the colored tashkeel.
    var target = document.querySelector("'" + target + "'");
    var text = document.querySelector("'" + target + "'").html();
    text = text.replace(/ٌ|ّ|ٍ|ُ|َ|ِ|ً/gi, function checkStr(x,y){
      return "&zwj;<span class='tashkoler'>"+x+"</span>&zwj;";
    });
    text = text.replace(/&zwj; /gi, function checkStr(x) {  console.log("+");return " ";});

    // Apply the colored taskeel.
    target.html(text);
  }
  
  return {
    harakat: harakat
  };
  
})();
