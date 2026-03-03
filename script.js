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
const skillDetails = {
  nmap:{
    title:"Nmap (Network Mapper)",
    text:"Nmap is a powerful open-source tool used for network discovery, port scanning, service enumeration and vulnerability identification. It helps security professionals identify open ports, running services and potential attack surfaces."
  },
  linux:{
    title:"Linux Systems",
    text:"Linux plays a critical role in cybersecurity. Most security tools run on Linux distributions like Kali. It provides flexibility, control and powerful networking capabilities."
  }
};

document.querySelectorAll(".skill-card").forEach(card=>{
  card.addEventListener("click",function(e){

    if(e.target.classList.contains("more-btn")){
      const skill = card.getAttribute("data-skill");
      document.getElementById("modalTitle").innerText = skillDetails[skill].title;
      document.getElementById("modalText").innerText = skillDetails[skill].text;
      document.getElementById("skillModal").style.display="flex";
      return;
    }

    card.classList.toggle("active");
  });
});

function closeModal(){
  document.getElementById("skillModal").style.display="none";
}
