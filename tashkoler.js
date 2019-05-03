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

    /*
    Define the DOM target to apply the colored tashkeel to.
    Default target tag is "p"
    */
    var bind = document.querySelector(target);
    bind.className += " tashkoler";
    var join;
    var text = document.querySelector(target).innerHTML;
    
    // Find all the harakat and wrap each one of them with <haraka></haraka>
    text = text.replace(/ٌ|ّ|ٍ|ُ|َ|ِ|ً/gi, function wrapHaraka(x,y){
      /*
        x: the harakat
        y: position of the haraka in the text
        Wrapping the harakat with the tags, breaks the arabic letters joints
        when the harakat is in the middle of a word (no space after or before: y+1 and y-1)
        so for this case, this line adds a zero width joiner (&zwj;)
        */
      join = (text.charAt(y+1) != " " && text.charAt(y-1) != " ") ? "&zwj;" : "";
      // Wrap the harakat and add a zero width joiner if needed
      return join + "<haraka>" + x + "</haraka>" + join;
    });

    // Apply the colored taskeel.
    bind.innerHTML = text;
  }
  
  return {
    harakat: harakat
  };
  
})();
