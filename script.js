const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");

const navs = [nav1,nav2,nav3,nav4,nav5];

// Control Navigation Function
function navAnimation(dir1, dir2){
    navs.forEach((nav,i) =>{
        nav.classList.replace(`slide-${dir1}-${i+1}`,`slide-${dir2}-${i+1}`);
    });
}
function toggleNav(){
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    }
    else{
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
navs.forEach(nav => nav.addEventListener('click', toggleNav));