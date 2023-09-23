let image = document.getElementById("image");
let social = document.querySelectorAll(".media");

console.log(social);
image.addEventListener("click", toogle);
function toogle() {
  //body
  let body = document.getElementsByTagName("body")[0];
  let navbar=document.getElementById("nav");
 //navigation
  let menuButton =document.getElementById("menu-icon")
  menuButton.style.color="#fff"
  let aTag = document.getElementsByTagName("a");
  //dynamic-section
  let dynamicText = document.getElementById("dynamic-first-text");
  let span=document.querySelectorAll(".name");
  //home-section
  let main_img=document.getElementById("main_img");
  //for all text in dark mode
  let Alltext=document.getElementsByClassName("darkModeText");
  //project-section
  let projectSec=document.getElementById("project");
  let head_title=document.getElementsByClassName("head_title")
  let card_title=document.querySelectorAll(".card_title")
  let card_desc=document.querySelectorAll(".card_desc")
  let p_linkButton =document.getElementsByClassName("card_link")
  let boxAll=document.getElementsByClassName("boxAall");
  //about me Section
  let aboutMeSec=document.getElementById("aboutUs");
  let aboutUs_card=document.getElementById("aboutUs_card");
  let aboutUsSummery_card=document.getElementById("aboutUsSummery_card");

  //contactUs section
  let inputTag = document.getElementsByClassName("inputClass");
  
  if (image.src.includes("img/sun")) {
    // Save the selected mode to localStorage
    localStorage.setItem("mode", "light");

    image.src = "img/moon.png";
    navbar.style.background="#edf2fc";
    body.style.background = "#edf2fc";
    menuButton.style.color="";
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.color = "";
    }

    for(let i=0;i<span.length;i++){
      span[i].style.setProperty('--beforeColor','')
  }
    dynamicText.style.color="";
    
    main_img.style.filter="";
   //project Slecttion
  projectSec.style.background="";
  
  for(let i=0;i<card_title.length;i++){
    card_title[i].style.color="";
  }
  for(let i=0;i<card_desc.length;i++){
    card_desc[i].style.color="";
  }
  for(let i=0;i<boxAll.length;i++){
    boxAll[i].style.background="";
  }
  for (let i = 0; i < head_title.length; i++) {
    head_title[i].style.color="";
    head_title[i].style.background="";
    
  }
//  skills
  for (let i = 0; i < Alltext.length; i++) {
    Alltext[i].style.color="";
    
  }
  //about
  aboutMeSec.style.background="";
  aboutUs_card.style.background="";
  aboutUsSummery_card.style.background="";

  //contactUs section
  for (let j = 0; j < inputTag.length; j++) {
    inputTag[j].style.background = "";
    inputTag[j].style.border = "";
  }

    social[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M30.57031,41.35049c-1.70123,-0.00139 -3.33919,0.64493 -4.58109,1.80763l55.58847,37.42554c2.24161,1.52063 5.17805,1.54289 7.44246,0.05643l57.1658,-37.31137c-1.25828,-1.26715 -2.97051,-1.9793 -4.75627,-1.97823zM23.85156,49.81979v74.11096c0.00426,3.7089 3.00985,6.71449 6.71875,6.71875h110.85938c3.7089,-0.00426 6.71449,-3.00985 6.71875,-6.71875v-73.85967l-55.452,36.19267c-4.52569,2.97043 -10.3939,2.92694 -14.87507,-0.11023z"></path></g></g></svg>`;
    social[1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M86,16.125c-38.58981,0 -69.875,31.28519 -69.875,69.875c0,32.99444 22.876,60.63 53.62906,67.95613c-1.591,-0.37894 -3.16856,-0.80356 -4.71656,-1.28731v-16.00944c0,0 -2.62031,0.87344 -6.11406,0.87344c-9.77444,0 -13.83525,-8.72094 -14.84844,-13.10156c-0.61544,-2.66869 -2.22256,-5.19762 -3.94794,-6.74294c-2.06131,-1.83825 -3.02613,-1.84363 -3.03956,-2.4725c-0.02688,-1.31956 1.76837,-1.26581 2.62031,-1.26581c4.36719,0 7.67819,4.64669 9.21544,7.04931c3.80819,5.93131 7.89587,6.92569 10.00019,6.92569c2.62031,0 4.88319,-0.39238 6.44194,-1.14487c0.72025,-5.074 2.97775,-9.59437 6.65963,-12.83012c-16.38569,-3.27606 -27.95,-12.67425 -27.95,-27.95c0,-7.869 3.15781,-15.10106 8.41994,-20.941c-0.5375,-1.52381 -1.43244,-4.60637 -1.43244,-9.62931c0,-3.31906 0.23112,-7.39331 1.74687,-11.35469c0,0 9.96525,0.06988 19.36344,8.97088c4.33763,-1.26312 8.97894,-1.98337 13.82719,-1.98337c4.84825,0 9.48956,0.72025 13.82719,1.98337c9.39819,-8.901 19.36344,-8.97087 19.36344,-8.97087c1.52381,3.96138 1.74688,8.03563 1.74688,11.35469c0,5.41531 -0.72025,8.57313 -1.161,9.93569c5.10088,5.78619 8.1485,12.90537 8.1485,20.63463c0,15.27575 -11.56431,24.67394 -27.95,27.95c4.37525,3.84312 6.9875,9.44119 6.9875,15.72187v22.99694c-1.548,0.48644 -3.12287,0.90838 -4.71656,1.28731c30.75306,-7.32613 53.62906,-34.96169 53.62906,-67.95613c0,-38.58981 -31.28519,-69.875 -69.875,-69.875zM90.87244,155.68687c-1.60981,0.11288 -3.23306,0.18813 -4.87244,0.18813c1.63938,0 3.25994,-0.07794 4.87244,-0.18813zM101.54988,154.11737c-3.12825,0.71219 -6.33444,1.21206 -9.60781,1.48888c3.27338,-0.27681 6.47956,-0.77937 9.60781,-1.48888zM86,155.875c-1.63938,0 -3.26262,-0.07525 -4.87244,-0.18813c1.6125,0.11019 3.23306,0.18813 4.87244,0.18813zM80.05525,155.60625c-3.27069,-0.27681 -6.47956,-0.77669 -9.60513,-1.48888c3.12825,0.7095 6.33444,1.21206 9.60513,1.48888z"></path></g></g></svg>`;
    social[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM62.80293,126.13333h-16.91333v-54.4208h16.91333zM54.17427,63.9324c-5.4524,0 -9.86133,-4.4204 -9.86133,-9.86133c0,-5.44093 4.41467,-9.8556 9.86133,-9.8556c5.4352,0 9.8556,4.4204 9.8556,9.8556c0,5.44093 -4.4204,9.86133 -9.8556,9.86133zM126.15627,126.13333h-16.90187v-26.46507c0,-6.3124 -0.11467,-14.4308 -8.7892,-14.4308c-8.80067,0 -10.15373,6.87427 -10.15373,13.97213v26.92373h-16.90187v-54.4208h16.22533v7.43613h0.22933c2.25893,-4.27707 7.7744,-8.7892 16.00173,-8.7892c17.12547,0 20.29027,11.27173 20.29027,25.92613z"></path></g></g></svg>`;
  } else {
    // Save the selected mode to localStorage
    localStorage.setItem("mode", "dark");

    image.src = "img/sun.png";
    navbar.style.background="rgb(23 23 23)";
    body.style.background = "rgb(23 23 23)";
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.color = "white";
    }
    for(let i=0;i<span.length;i++){
      span[i].style.setProperty('--beforeColor','rgb(23 23 23)')
    }
    dynamicText.style.color="white";
    main_img.style.filter="drop-shadow(10px 4px 6px white)";
    menuButton.style.color="#fff";
    //project section
    projectSec.style.background="rgba(18,18,18)"
    
    for(let i=0;i<card_title.length;i++){
      card_title[i].style.color="white";
    }
    for(let i=0;i<card_desc.length;i++){
      card_desc[i].style.color="white";
    }
    for(let i=0;i<p_linkButton.length;i++){
      p_linkButton[i].style.color="rgba(20,184,166)";
    }
    
    for(let i=0;i<boxAll.length;i++){
      boxAll[i].style.background="#333";
    }
    for (let i = 0; i < head_title.length; i++) {
      head_title[i].style.color="white";
      head_title[i].style.background="#333";
      
    }
    //skills
    for (let i = 0; i < Alltext.length; i++) {
      Alltext[i].style.color="white";
      
    }
    //about
    aboutMeSec.style.background="rgba(18,18,18)";
    aboutUs_card.style.background="#333";
    aboutUsSummery_card.style.background="#333";
    //contactUs 
    for (let j = 0; j < inputTag.length; j++) {
      inputTag[j].style.background = "rgb(23 23 23)";
      inputTag[j].style.border = "2px solid green";
    }

    social[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 226 226"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><path d="M40.16797,54.33262c-2.23534,-0.00182 -4.38754,0.8474 -6.01933,2.37515l73.04067,49.17542c2.94537,1.99803 6.80372,2.02729 9.77904,0.07414l75.11321,-49.0254c-1.65332,-1.66497 -3.90312,-2.6007 -6.24952,-2.5993zM31.33984,65.46089v97.37836c0.00559,4.87332 3.95481,8.82253 8.82813,8.82813h145.66406c4.87332,-0.00559 8.82253,-3.95481 8.82813,-8.82812v-97.04817l-72.86135,47.55549c-5.94654,3.903 -13.65711,3.84586 -19.54516,-0.14484z"></path></g></g></svg>`;
    social[1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64" style=" fill:#ffffff;"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path></svg>`;
    social[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="30" height="30"
        viewBox="0 0 30 30"
        style=" fill:#ffffff;">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path></svg>`;
  }
}

//navigation toggle
let menu=document.querySelector("#menu-icon")
let navbar=document.querySelector(".navbar")
menu.onclick=()=>{
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("open")
}

const savedMode = localStorage.getItem("mode");
        if (savedMode === "dark") {
          toogle(); // Switch to dark mode if it was selected before
        }




