window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#c09843",
    ]

    pads.forEach((pad , index)=> {
        pad.addEventListener("click", function() {
            // reseting the sound when we click one pad again and again
            sounds[index].curretTime = 0;
            // play the sound with index of pad
            sounds[index].play();

            // create bubbles when pad is clicked
            createBubbles(index);
        })
    })

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        // to increase performance we have to delete the div that has been created during animation
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
});