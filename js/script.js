let type=document.querySelector(".type");
let text="A Frontend Developer";
let index=1;

const typing= () => {
let new_text=text.slice(0,index);
type.innerText=new_text;
index > text.length ? index=1 : index++ ;
setTimeout(()=>{
typing();
},500);
}
typing();

const skills=document.querySelector("#skills");
const education=document.querySelector("#education");
const experience=document.querySelector("#experience");


const items=document.querySelectorAll(".skillSet li");
items.forEach((item)=>{
  item.addEventListener("click",()=>{
    items.forEach((itera)=>{
      itera.classList.remove("active");
    });
    item.classList.add("active");
  });
});
items.forEach((item)=>{
  item.addEventListener("click",()=>{
    [skills,education,experience].forEach((indira)=>{
      indira.style.display="none";
    });
    let check=item.dataset;
    if(check.show==="skills"){
      skills.style.display="block";
     }
     else if(check.show==="education"){
      education.style.display="block"
     }
     else if(check.show==="experience"){
      experience.style.display="block";
     }
  })
});


// fixed part starts here
const fixed=document.querySelector("#fixed");
const toggler=document.querySelector(".toggler");
let ic=0;
toggler.addEventListener("click",()=>{
  if(ic==0){
    toggler.innerHTML='<i class="bi bi-x-lg"></i>';
    ic=1;
  }
  else{
    toggler.innerHTML='<i class="bi bi-list"></i>';
    ic=0;
  }
  let isTrue=fixed.classList.contains("show");
  fixed.classList.toggle("show",!isTrue);
});

const center=document.querySelector(".center button");
const portItems=document.querySelectorAll(".portfolio-item");
let btn=0;

for(let i=3;i<9;i++){
portItems[i].style.display='none';
}

center.addEventListener("click",()=>{
 if(btn==0){
  for(let i=3;i<9;i++){
    portItems[i].style.display='block';
    }
    center.innerText='Show Less';
    btn=1;
 }
 else{
  for(let i=3;i<9;i++){
    portItems[i].style.display='none';
    }
    center.innerText='Show More';
    btn=0;
 }

});