const table = document.getElementById('table');
const addBtn = document.getElementById('add-btn');
const formExit= document.getElementById('form-exit');


const tl = gsap.timeline();

tl.from('.nav-left-effect',{
    x:"-100%",
    opacity:0, 
    delay:0.3,
    duration:0.4,
    ease:"power#.Out"
})

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
            <td class="hidden">${number}</td>
            <td class="hidden">${email}</td>
            <td class="hidden">${position}</td>
            <td class="hidden">${department}</td>
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