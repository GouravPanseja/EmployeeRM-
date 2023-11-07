const table = document.getElementById('table');
const addBtn = document.getElementById('add-btn');
const formExit= document.getElementById('form-exit');
const showMore = document.getElementById('show-more');
const container = document.getElementsByClassName('container')[0];
var col3= document.getElementsByClassName('hidden-xs');
var col4= document.getElementsByClassName('hidden-s');
var col5= document.getElementsByClassName('hidden-m');
const smIcon= document.getElementById('show-more-icon');
const botBtn = document.getElementsByClassName('bot-btn')[0];
const bot= document.getElementsByClassName('bot')[0];
const botExitBtn = document.getElementsByClassName('bot-exit')[0];



console.log(col3);
const tl = gsap.timeline();

const showMoreFunc = ()=>{

    if(window.innerWidth<=550){
        showMore.style.display="block";
    }
    else{
        showMore.style.display="none";
    }
}

var show=false;

document.addEventListener("DOMContentLoaded", showMoreFunc);

showMore.addEventListener('click',()=>{


    if(!show){


    console.log("clicked");
    console.log(container.classList);
    container.classList.remove('overflow-hidden');
    console.log(container.classList);

    Array.from(col3).forEach((col)=>{
        console.log("removed");
        col.classList.remove('hidden-xs');
    })
    Array.from(col4).forEach((col)=>{
        console.log("removed");
        col.classList.remove('hidden-s');
    })
    Array.from(col5).forEach((col)=>{
        console.log("removed");
        col.classList.remove('hidden-m');
    })

    container.classList.add('overflow-scroll');

    gsap.to('#show-more',{
        transform:"rotate(180deg)",
        duration:0.5,
    })
    console.log(col3);

    show=true;
    }

    else{
        console.log("clicked-again");

        container.classList.remove('overflow-scroll');
        container.classList.add('overflow-hidden');

    
        
        Array.from(document.getElementsByClassName('hidden-xs')).forEach((col)=>{
            console.log("added");
            col.classList.add('hidden-xs');
        })
        Array.from(col4).forEach((col)=>{
            console.log("added");
            col.classList.add('hidden-s');
        })
        Array.from(col5).forEach((col)=>{
            console.log("added");
            col.classList.add('hidden-m');
        })
    

    
        gsap.to('#show-more',{
            transform:"rotate(180deg)",
            duration:0.5,
        })

        show=false;
    }    
})


botBtn.addEventListener('click',()=>{

        gsap.to('.bot-div',{
        opacity:1,
        scale:1,
        x:"-5.625rem",
        y:"-3.125rem",
    })

gsap.to('.bot-btn',{
    opacity:0,
    scale:0,

})

})


botExitBtn.addEventListener('click',()=>{
    console.log("exit clicked");
    gsap.to('.bot-div',{
        opacity:0,
        scale:0,
        x:"6.25rem",
        y:"6.25rem",
   
    })

    gsap.to('.bot-btn',{
        opacity:1,
        scale:1,
    })

});


tl.from('.nav-left-effect',{
    x:"-100%",
    opacity:0, 
    delay:0.3,
    duration:0.4,
    ease:"power#.Out"
},0.2)

tl.from("tr",{
    opacity:0,
    scale:0,
},0.5)

var details = {
        name:"",
        phoneNumber:"",
        email:"",
        position:"",
        department:"",
        url:"",
}

function createEmp(details) {
    console.log("creating emp");

    const emp= document.createElement('tr');

    const name= details.name;
    const number= details.phoneNumber;
    const email = details.email;
    const position = details.position;
    const department= details.department;
    const url= details.url;

    var temp=`
        <tr class="emp">
            <td class="emp-name"><img class="emp-img" src="${url}">${name} </td>
            <td>${number}</td>
            <td class="hidden-xs">${email}</td>
            <td class="hidden-s">${position}</td>
            <td class="hidden-m">${department}</td>
        </tr>`

    emp.insertAdjacentHTML("afterbegin",temp);

    table.appendChild(emp);

}            

const t1 = gsap.timeline({
    

});

addBtn.addEventListener('click',()=>{
    t1.play();
    
    t1.to(".input-form-cont",{

        scale:1,
        opacity:1,
        duration:0.5
    },0)
    t1.to(".input-form",{
        transform: "translate(-50%, -50%) scale(1)",
        opacity:1,
        duration:0.5
        
    },0.1);
    
    t1.to(".form-heading",{
        opacity:1,
        scale:1,

    },0.2)
    t1.to(".form-part",{
        opacity:1,
        scale:1,
        stagger:0.1,
        duration:0.5
        
    },0.2)
})

formExit.addEventListener('click',()=>{
    gsap.to(".input-form , .input-form-cont",{
        scale:0,
        opacity:0,

    })
    t1.progress(0);
    t1.pause();
})

const t2 = gsap.timeline();

document.getElementById('submit-btn').addEventListener('click',(event)=>{
    console.log("button clicked");
    event.preventDefault();
    details.name = document.getElementsByName('name')[0].value
    details.phoneNumber = document.getElementsByName('number')[0].value
    details.email = document.getElementsByName('email')[0].value
    details.position= document.getElementById('position-select').value;
    details.department= document.getElementById("department-select").value;



    const selectedImg = document.getElementsByName('img-input')[0].files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(selectedImg);

    reader.onload = function(e){
        const url = e.target.result;
        console.log(url);
        details.url = url;
    }

    gsap.to(".input-form , .input-form-cont",{
        scale:0,
        opacity:0,
    })
    t1.progress(0);
    t1.pause();

    setTimeout(()=>{
        createEmp(details); 
    },500)


    resetInputFeild();



})


function resetInputFeild(){
    document.getElementsByName('name')[0].value ="";
    document.getElementsByName('number')[0].value="";
    document.getElementsByName('email')[0].value="";
    document.getElementById('position-select').value="";
    document.getElementById("department-select").value="";


    document.getElementsByName('img-input')[0].files[0].value=null;


}