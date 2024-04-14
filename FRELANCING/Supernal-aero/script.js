const menu = document.getElementById("menu");
const checked = document.getElementById("checkbox3");

function menuHandler(){
    console.log("hello");
    if(!checked.checked){
        menu.classList.remove("active"); 
    }
    else{
        menu.classList.add("active");
    }
    // menu.classList.remove("visible");
    
}
// Store references to the video and heading elements
const video = document.querySelector("#page1 video");
const content = document.querySelector(".content");

// Create a GSAP timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "+=300", // Adjust the duration you want the video to stick
        scrub: true,
        pin: true
    }
});

// Define the animations
tl.to(video, { scale: 1.5 }); // Example animation for the video
tl.to(content, { y: 100 }, 0); // Example animation for the content div
