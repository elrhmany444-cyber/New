// Typing Effect
const text = "Rhmany";
let i = 0;
function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,80);
  }
}
type();

// Scroll animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

sections.forEach(section=>observer.observe(section));

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Pet Auto Messages
const messages=[
  "Welcome 👋",
  "استغفر ربنا 🤍",
  "صلي على النبي ﷺ",
  "Keep learning security 🔐",
  "Stay ethical ⚔"
];

function showPet(){
  const msgBox=document.getElementById("petMsg");
  const random=messages[Math.floor(Math.random()*messages.length)];
  msgBox.innerText=random;
  msgBox.style.display="block";
  setTimeout(()=>{msgBox.style.display="none"},4000);
}

setInterval(showPet,15000);

function manualPet(){
  showPet();
}
