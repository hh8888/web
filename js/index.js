// document.addEventListener('DOMContentLoaded', initFP);

// function initFP() {
//   // 添加交互动画,不能使用箭头函数，要引用实例中的 this
//   const addAnimation = function() {
//     // i 表示每次滑动将要进入的页面的索引，可以通过 this.pages[i] 获取当前页面
//     // 取得将要进入页面后便可以做进一步操作，比如，添加动画
//     const i = -(this.currentPosition / this.viewHeight);

//     // 为将要进入页面添加动画
//     document.querySelector('.fade-in').classList.remove('fade-in');
//     this.pages[i].querySelector('p').classList.add('fade-in');
//   };

//   // 创建全屏滚动实例，传入动画回调函数，并初始化
//   new PureFullPage({
//     definePages: addAnimation,
//   });
// }

// window.addEventListener('load', function () {
//   document.querySelector('p').classList.add('fade-in');
// });

window.addEventListener('DOMContentLoaded', function () {
  init();
});

function init(){
  // var hash = window.location.hash.substr(1);
  handleChangePage(1);
  colorSections();
}

function handleChangePage(n){
  hideAllPages();
  showPage(n);
}

function showPage(n){
  var page = document.querySelector("#page"+n);
  if(page){
    page.classList.remove("hide");
    page.classList.add("show");
    console.log("show:",n);
  }
}
function hidePage(n){
  var page = document.querySelector("#page"+n);
  if(page){
    page.classList.remove("show");
    page.classList.add("hide");
    console.log("hide:",n);
  }
}
function hideAllPages(){
  for(var i=0;i<10;i++){hidePage(i)}
}
function colorSections(){
  var sections=document.querySelectorAll("div.section");
  sections.forEach(a=>a.style.backgroundColor=randomColor(220));
}

function randomColor(brightness){
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0 | ((Math.random()*r) + brightness);
    var s = n.toString(16);
    return (s.length==1)?'0'+s:s; 
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}
