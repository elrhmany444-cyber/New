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
// =======================
// PET SYSTEM
// =======================

const messages = [
  "أهلا ياحبيب 👋",
  "استغفر ربنا 🤍",
  "صلي على النبي ﷺ",
  "Keep learning security 🔐",
  "Stay ethical ⚔",
  " don't forget that i love u"
];

// صوت خفيف (بيشتغل بعد أول تفاعل بس عشان المتصفح يسمح)
const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
clickSound.volume = 0.3;

function showPet() {
  const msgBox = document.getElementById("petMsg");
  if (!msgBox) return;

  const random = messages[Math.floor(Math.random() * messages.length)];
  msgBox.innerText = random;

  msgBox.style.display = "block";
  msgBox.style.opacity = "1";
  msgBox.style.transform = "translateY(0px)";

  setTimeout(() => {
    msgBox.style.opacity = "0";
    msgBox.style.transform = "translateY(10px)";
    setTimeout(() => {
      msgBox.style.display = "none";
    }, 300);
  }, 4000);
}

function manualPet() {
  showPet();

  // تشغيل الصوت
  clickSound.play().catch(()=>{});

  // تكبير الروبوت لحظة
  const robot = document.querySelector(".pet-3d");
  if(robot){
    robot.style.transform = "scale(1.2)";
    setTimeout(()=>{
      robot.style.transform = "scale(1)";
    },300);
  }
}

// رسالة كل 20 ثانية
setInterval(showPet, 20000);


// =======================
// SKILL SYSTEM
// =======================

const skillDetails = {
  nmap:{
    title:"Nmap (Network Mapper)",
    text:"Nmap is a powerful open-source tool used for network discovery, port scanning, service enumeration, OS detection and vulnerability identification."
  },
  linux:{
    title:"Linux Systems",
    text:"Linux plays a critical role in cybersecurity. Most security tools operate on Linux distributions like Kali Linux. It provides flexibility and powerful networking control."
  }
};

document.querySelectorAll(".skill-card").forEach(card=>{
  card.addEventListener("click",function(e){

    // لو ضغط على زرار التفاصيل
    if(e.target.classList.contains("more-btn")){
      e.stopPropagation();

      const skill = card.getAttribute("data-skill");
      const modal = document.getElementById("skillModal");

      document.getElementById("modalTitle").innerText = skillDetails[skill].title;
      document.getElementById("modalText").innerText = skillDetails[skill].text;

      modal.style.display = "flex";
      modal.style.opacity = "1";
      modal.style.transform = "scale(1)";

      return;
    }

    // توسيع الكارت
    card.classList.toggle("active");
  });
});

// قفل المودال
function closeModal(){
  const modal = document.getElementById("skillModal");
  modal.style.opacity = "0";
  modal.style.transform = "scale(0.9)";
  setTimeout(()=>{
    modal.style.display = "none";
  },200);
}
// ============================
// NETWORK BACKGROUND SAFE
// ============================

window.addEventListener("DOMContentLoaded", function(){

  const canvas = document.getElementById("network");

  if(!canvas) return; // يمنع أي crash

  const ctx = canvas.getContext("2d");

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];

  for(let i=0;i<60;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      vx:(Math.random()-0.5)*1,
      vy:(Math.random()-0.5)*1
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
      p.x+=p.vx;
      p.y+=p.vy;

      if(p.x<0||p.x>canvas.width) p.vx*=-1;
      if(p.y<0||p.y>canvas.height) p.vy*=-1;

      ctx.fillStyle="#00ff9d";
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fill();
    });

    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        let dx=particles[i].x-particles[j].x;
        let dy=particles[i].y-particles[j].y;
        let dist=Math.sqrt(dx*dx+dy*dy);

        if(dist<120){
          ctx.strokeStyle="#00ff9d22";
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

});
