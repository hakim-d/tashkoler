/*!
 * Tashkoler
 * Give your Arabic text a colored tashkeel.
 * Copyright (C) 2016 Hakim DAHOUNE (http://hakim.ma, @7akim_d)
 */

var tashkoler = (function (color = "#", target = "body"){
  var target = document.querySelector(target);
  var text = document.querySelector(target).html();
  text = text.replace(/ٌ|ّ|ٍ|ُ|َ|ِ|ً/gi, function checkStr(x,y){
    return "&zwj;<span class='shakl'>"+x+"</span>&zwj;";
  });
  text = text.replace(/&zwj; /gi, function checkStr(x) {  console.log("+");return " ";});
  target.html(text);
})();
