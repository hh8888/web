var Xutil,x; Xutil=x={};

x.get = function(name){return document.querySelector(name)};
x.getAll = function(name){return document.querySelectorAll(name)};

x.handleChangePage = function(n){
    x.hidePages();
    x.showPage(n);
}
x.replaceClass = function(el, oldClass, newClass=""){
    if(el){
        el.classList.remove(oldClass);
        el.classList.add(newClass);
    }
}
x.hide = function(el){
    x.replaceClass(el, "show", "hide");
}
x.show = function(el){
    x.replaceClass(el, "hide", "show");
}
x.showPage = function(n){
    x.show(x.get("#page"+n));
}
x.hidePage = function(n){
    x.hide(x.get("#page"+n));
}
x.hidePages = function(n=10){
    for(var i=0;i<n;i++) x.hidePage(i);
}

x.colorSections = function(name="div.section"){
    x.getAll(name).forEach(a => a.style.backgroundColor = x.randomColor(220));
}
x.randomColor = function(brightness){
    function randomChannel(brightness){
      var r = 255-brightness;
      var n = 0 | ((Math.random()*r) + brightness);
      var s = n.toString(16);
      return (s.length==1)?'0'+s:s; 
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}