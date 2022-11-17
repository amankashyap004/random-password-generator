const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
const randomPasswordFirst = document.getElementById("random-password-first");
const randomPasswordSecond = document.getElementById("random-password-second");

generatePasswordsBtn.addEventListener("click", ()=> {
  const charactersLength = characters.length;

  // randomPasswordFirst.textContent = "";
  // randomPasswordSecond.textContent = "";

  let passwordOne ='';
  let passwordTwo ='';

  for (let i = 0; i < 16; i++) {
    const randomCharactersOne = Math.floor(Math.random() * charactersLength);
    const randomPasswordOne = characters[randomCharactersOne];
    // randomPasswordFirst.textContent += randomPasswordOne;
    passwordOne += randomPasswordOne;
   
    const randomCharactersTwo = Math.floor(Math.random() * charactersLength);
    const randomPasswordTwo = characters[randomCharactersTwo];
    // randomPasswordSecond.textContent += randomPasswordTwo;
    passwordTwo += randomPasswordTwo;
  }
  
  randomPasswordFirst.textContent = passwordOne;
  randomPasswordSecond.textContent = passwordTwo;
});

// Toggle Mode Dark Theme
const myIcon = document.getElementById("my-icon");
const root = document.querySelector(":root");
const toggleBtn = document.getElementById("toggle-btn");

let click = "";
toggleBtn.addEventListener("click", ()=> {
  // Light Mode
  if (click === 1) {
    root.style.setProperty("--bg-color", "#1f2937");
    root.style.setProperty("--text-color", "#FFFFFF");
    root.style.setProperty("--border", "#2f3e53");
    root.style.setProperty("--text-light", "#6B7280");
    root.style.setProperty("--bg-color-hover", "#ECFDF5");
    myIcon.src = "./img/sun-solid.svg";
    click++;
  }
  // Dark Mode
  else {
    root.style.setProperty("--bg-color", "#ECFDF5");
    root.style.setProperty("--text-color", "#2B283A");
    root.style.setProperty("--border", "#D5D4D8");
    root.style.setProperty("--text-light", "#374151");
    root.style.setProperty("--bg-color-hover", "#1f2937");
    myIcon.src = "./img/moon-solid.svg";
    click = 1;
  }
});

//Copied Feature
randomPasswordFirst.addEventListener('click', ()=>{
  let text = randomPasswordFirst.textContent;
	navigator.clipboard.writeText(`${text}`);

  setTimeout( ()=>{
    randomPasswordFirst.textContent = "Copied";
  }, 200);
})

randomPasswordSecond.addEventListener('click', ()=>{
  let text = randomPasswordSecond.textContent;
	navigator.clipboard.writeText(`${text}`);

  setTimeout( ()=>{
    randomPasswordSecond.textContent = "Copied";
  }, 200);
})
