// Get all elements with the class name "clkBtn"
let buttons = document.getElementsByClassName("clkBtn");

// Loop through the elements and add a click event listener to each
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Get the link URL
    let link = document.getElementById("copyTex").getAttribute("href");

    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard
      .writeText(link)
    console.log("clicked");
  });
}


// ***************Project-btn***********
//   document.getElementById('p-s-big-prjct-btn').addEventListener('click',function(prjct){
//   document.getElementById("p-s-big-prjct-btn").style.backgroundColor = "White";
//   document.getElementById("p-s-big-prjct-btn").style.color = "black";
//   document.getElementById("projects-content").style.display ="block" ;
//   document.getElementById("p-s-big-btn").style.backgroundColor = "hsl(40, 1%, 46%)" ;
//   document.getElementById("p-s-big-btn").style.color = "White" ;
// })
// **************
// document.getElementById('skill-btn').addEventListener('click',function(skills){
//   document.getElementById("skill-btn").style.backgroundColor = "White";
//   document.getElementById("skill-btn").style.color = "black";
//   document.getElementById("projects-content").style.display ="none"
//   document.getElementById("project-btn").style.backgroundColor = "hsl(40, 1%, 46%)" ;
//   document.getElementById("project-btn").style.color = "White" ;

// })
// skills btn********************

let btn_flag = true;


// ***************Project-btn***********
document.getElementById('p-s-big-prjct-btn').addEventListener('click', function (prjct) {
  document.getElementById("projects-content").style.display = "block";
  document.getElementById("skils-full-prt-id").style.display = "none";
  btn_flag = false;

  if (!btn_flag) {
    document.getElementById("project-btn").style.color = "black";
    document.getElementById("project-btn").style.backgroundColor = "#ffff";

    document.getElementById("skill-btn").style.color = "#ffff";
    document.getElementById("skill-btn").style.backgroundColor = "#0000";

  }
  else {
    document.getElementById("project-btn").style.color = "#ffff";
    document.getElementById("project-btn").style.backgroundColor = "#0000";

    document.getElementById("skill-btn").style.color = "black";
    document.getElementById("skill-btn").style.backgroundColor = "#ffff";
  }

})

// ****************

document.getElementById('p-s-big-skill-btn').addEventListener('click', function (skills) {
  btn_flag = true;
  document.getElementById("projects-content").style.display = "none";
  document.getElementById("skils-full-prt-id").style.display = "block";
  if (btn_flag) {
    document.getElementById("skill-btn").style.color = "black";
    document.getElementById("skill-btn").style.backgroundColor = "#ffff";

    document.getElementById("project-btn").style.color = "#ffff";
    document.getElementById("project-btn").style.backgroundColor = "#0000";
  }
  else {
    document.getElementById("skill-btn").style.color = "#ffff";
    document.getElementById("skill-btn").style.backgroundColor = "#0000";

    document.getElementById("project-btn").style.color = "black";
    document.getElementById("project-btn").style.backgroundColor = "#ffff";
  }
})


// light-mood -- dark-mood ************


let flag = true;

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  flag = !flag;
  if (flag) {
    document.getElementById("dark-light").innerHTML = `<i class="fa-solid fa-sun"></i>`;
    document.getElementById("dark-light").style.color = "black";
    document.getElementById("dark-light").style.backgroundColor = "white";
  } else {
    document.getElementById("dark-light").innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.getElementById("dark-light").style.color = "white";
    document.getElementById("dark-light").style.backgroundColor = "black";
  }
}
