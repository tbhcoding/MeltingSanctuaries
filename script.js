let text = document.getElementById('text');
let glacier1 = document.getElementById('glacier1');
let glacier2 = document.getElementById('glacier2');
let bear1 = document.getElementById('bear1');
let glacier3 = document.getElementById('glacier3');
let glacier4 = document.getElementById('glacier4');

//constant 
const resizableText = document.getElementById('text');

function adjustTextSize() {
    const windowWidth = window.innerWidth;
    const fontSize = windowWidth / 15; // Adjust the 40 to control the rate of text size change
    resizableText.style.fontSize = fontSize + 'px';
}

window.addEventListener('scroll', () => {
    let scrollYValue = window.scrollY;
    const windowWidth = window.innerWidth;
    const fontSize = windowWidth / 15;
    

    resizableText.style.fontSize = fontSize - scrollYValue * 100;
    resizableText.style.marginTop = scrollYValue * 1.3 + 'px';
    glacier1.style.marginLeft = -scrollYValue * 1.3 + 'px';
    glacier2.style.marginLeft = scrollYValue * 1.5  + 'px';
    bear1.style.marginLeft = scrollYValue * 1 + 'px';
    glacier3.style.marginLeft = scrollYValue * 1.7  + 'px';
    glacier4.style.marginLeft = -scrollYValue * 1.1 + 'px';
});
//SNOW
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toggle');
    const particlesJs = document.getElementById('particles-js');

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        particlesJs.classList.toggle('active');
    });
});
// adjustTextSize();
// window.addEventListener('resize', adjustTextSize);

// const buttons = document.querySelectorAll('nav a');

// function adjustButtonSize() {
//     const windowWidth = window.innerWidth;
//     const fontSize = windowWidth / 85 // Adjust the 100 to control the rate of button size change
//     buttons.forEach(button => {
//         button.style.fontSize = fontSize + 'px';
//     });
// }
// adjustButtonSize();
// window.addEventListener('resize', adjustButtonSize);

// const scienceText = document.getElementById('science-text');
// function adjustScienceTextSize() {
//     const windowWidth = window.innerWidth;
//     const fontSize = windowWidth / 90; // Adjust the 100 to control the rate of text size change
//     scienceText.style.fontSize = fontSize + 'px';
// }
// adjustScienceTextSize();
// window.addEventListener('resize', adjustScienceTextSize);

//WHAT IS CRYOSPHERE GUARDIANS?
var animationStarted = false;

window.addEventListener('scroll', function () {
    // Set the scroll value threshold
    var scrollThreshold = 180;
    const windowWidth = window.innerWidth;
    // Get the elements to animate
    var secH2 = document.querySelector('.sec h2');
    var line1 = document.querySelector('.line1');
    var line2 = document.querySelector('.line2');
    var line3 = document.querySelector('.line3');

    if (windowWidth > 1200) {
        if (window.scrollY >= scrollThreshold && !animationStarted) {
            // Apply the CSS changes and start the animation when the condition is met
            secH2.style.animation = 'appear 1s forwards';
            line1.style.animation = 'appear 3s forwards';
            line2.style.animation = 'appear 5s forwards';
            line3.style.animation = 'appear 8s forwards';
            
            // Set a flag to prevent re-triggering the animation
            animationStarted = true;
        } else if (window.scrollY < scrollThreshold) {
            // Reset the animation when the scroll position goes below the threshold
            secH2.style.animation = 'none';
            line1.style.animation = 'none';
            line2.style.animation = 'none';
            line3.style.animation = 'none';
    
            // Reset the flag
            animationStarted = false;
        }
    }
    if (windowWidth < 1200) {
        if (window.scrollY < 592 && !animationStarted) {
            // Apply the CSS changes and start the animation when the condition is met
            secH2.style.animation = 'appear 1s forwards';
            line1.style.animation = 'appear 5s forwards';
            line2.style.animation = 'appear 8s forwards';
            line3.style.animation = 'appear 11s forwards';
            
            // Set a flag to prevent re-triggering the animation
            animationStarted = true;
        } else if (window.scrollY > 592) {
            // Reset the animation when the scroll position goes below the threshold
            secH2.style.animation = 'none';
            line1.style.animation = 'none';
            line2.style.animation = 'none';
            line3.style.animation = 'none';
    
            // Reset the flag
            animationStarted = false;
        }
    }
});


// Function to update the height of the div based on the background image size
function updateDivHeight() {
    const backgroundImg = new Image();
    backgroundImg.src = "images/1337838.png";

    // const backgroundImg2 = new Image();
    // backgroundImg2.src = "newImages/img2.jpg";

    
    backgroundImg.onload = function() {
        const aspectRatio = backgroundImg.width / backgroundImg.height;
        const newHeight = window.innerWidth / aspectRatio;
        
        const responsiveDiv = document.getElementById("bg-img");
        responsiveDiv.style.height = newHeight - 10 + "px";
    };
    // backgroundImg2.onload = function() {
    //     const aspectRatio = backgroundImg.width / backgroundImg.height;
    //     const newHeight = window.innerWidth / aspectRatio;
        
    //     const responsiveDiv = document.getElementById("bg-img2");
    //     responsiveDiv.style.height = newHeight - 10 + "px";
    // };

}

window.addEventListener("resize", updateDivHeight);
updateDivHeight();

