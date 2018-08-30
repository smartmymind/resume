var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  for(var i=1;i<=5;i++){
    var xxx = 'images/pic'+i+'.jpg';
    var newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    console.log(newImage);
    newImage.onclick = function(e){
        var src = e.target.getAttribute('src');
        console.log(e.target);
        console.log(src);
        displayedImage.setAttribute('src', src);
        // thumbBar.appendChild(newImage);
    }
  }

// console.log(btn.getAttribute());
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    var className = btn.getAttribute('class');
    // console.log(className);
    if(className == 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';

        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';

        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

}
