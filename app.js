// I had to be resourceful to make this work how i wanted it to:

const songs = document.querySelectorAll("audio");
const divs = document.querySelectorAll(".container div");

window.addEventListener("keydown", (e) => {
  let code = e.keyCode.toString();
  songs.forEach(song => {
    if (code === song.id) {
      song.play();
      song.loop = true;
      song.currentTime = 0;
    } else {
      song.pause(); // // THIS TOOK ME AGES TO FIGURE OUT! Seems so simple now!
      song.currentTime = 0; //how to pause the loops when the next one plays!!

    }
  });

  divs.forEach(div => { // Some animation I have played with
    if (code === div.id) {
      div.classList.add("animate");
      setTimeout(() => div.classList.remove("animate"), 100);
    }
  })
});
//--------------------------------------------

// I wanted the letters to turn green... in the animation or whatever, but i could not figure it out..even a hover.. or when user randomly clicks.. Probably stressing and spent too long on this!  

// but anyway.. Where did I go wrong ? 

const greenFun = document.getElementsByClassName("name");

window.addEventListener("keydown", (e) => {
  let greenFun = e.keyCode.toString();
  greenFun.style.color = "limegreen";
});

//--------------------------------------------