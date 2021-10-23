let list_items = [
    {
      "name": "Designing web page",
      "date": "2021-01-29",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=70",
        "https://i.pravatar.cc/400?img=69",
        "https://i.pravatar.cc/400?img=68"
      ],
      "progress":100,
    },
    {
      "name": "Portfolio web design ",
      "date": "2021-10-20",
      "status":"pending",
      "Team": [
        "https://i.pravatar.cc/400?img=23",
        "https://i.pravatar.cc/400?img=11",
        "https://i.pravatar.cc/400?img=32",
        "https://i.pravatar.cc/400?img=21"
      ],
      "progress":70,
    },
    {
      "name": "Build a Meditation App",
      "date": "2021-08-28",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=31",
        "https://i.pravatar.cc/400?img=12",
      ],
      "progress":100,
    },
    {
      "name": "Build a Weather App",
      "date": "2021-09-25",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=43",
        "https://i.pravatar.cc/400?img=51",
      ],
      "progress":100,
    },
    {
      "name": "Build an eCommerce Shopping Cart",
      "date": "2021-08-15",
      "status":"pending",
      "Team": [
        "https://i.pravatar.cc/400?img=13",
        
        "https://i.pravatar.cc/400?img=22",
        "https://i.pravatar.cc/400?img=20"
      ],
      "progress":80,
    },
    {
      "name": "Build an Issue Tracker",
      "date": "2021-06-19",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=53",
        "https://i.pravatar.cc/400?img=51",
        "https://i.pravatar.cc/400?img=52"
      ],
      "progress":100,
    },
    {
      "name": "Build a PIN Pad",
      "date": "2021=07-22",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=63",
        "https://i.pravatar.cc/400?img=61",
        "https://i.pravatar.cc/400?img=62",
        
      ],
      "progress":100,
    },
    {
      "name": "Build a Landing Page",
      "date": "2021-08-28",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=47",
        
      ],
      "progress":100,
    },
    {
      "name": "Build a TIC TAC TOE game",
      "date": "2021-10-20",
      "status":"pending",
      "Team": [
        "https://i.pravatar.cc/400?img=49",
        "https://i.pravatar.cc/400?img=48"
      ],
      "progress":50,
    },
    {
      "name": "Book Finder App",
      "date": "2021-09-03",
      "status":"pending",
      "Team": [
        "https://i.pravatar.cc/400?img=35",
        "https://i.pravatar.cc/400?img=36",
        "https://i.pravatar.cc/400?img=37"
      ],
      "progress":90,
    },
    {
      "name": "Movie Booking system",
      "date": "2021-10-09",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=39",
        "https://i.pravatar.cc/400?img=19",
        "https://i.pravatar.cc/400?img=28"
      ],
      "progress":100,
    },
    {
      "name": "Survey App",
      "date": "2021-09-30",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=30",
        "https://i.pravatar.cc/400?img=10",
        "https://i.pravatar.cc/400?img=20"
      ],
      "progress":100,
    },
    {
      "name": "Chat App",
      "date": "2021-08-02",
      "status":"completed",
      "Team": [
        "https://i.pravatar.cc/400?img=35",
        "https://i.pravatar.cc/400?img=15",
        "https://i.pravatar.cc/400?img=25",
        "https://i.pravatar.cc/400?img=26"
      ],
      "progress":100,
    },
    {
      "name": "Rock paper scissor Game",
      "date": "2021-09-26",
      "status":"pending",
      "Team": [
        "https://i.pravatar.cc/400?img=36",
        "https://i.pravatar.cc/400?img=16",
        
      ],
      "progress":10,
    },
    
  ]




  
const list_element =document.getElementById('list');
const paginaion = document.getElementById('pagination');

let current_page=1;
let rows=5;
function displayList(items,wrapper,rows_per_page,page){
    wrapper.innerHTML="";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start,end);
    let len =paginatedItems.length;
    let imgstr="";
   
    
    for (let i=0;i<len;i++){
        
        let item=paginatedItems[i]["name"];
        let date=paginatedItems[i]["date"];
        let status = paginatedItems[i]["status"];
        let progress = paginatedItems[i]["progress"];
        let team_length =paginatedItems[i]["Team"].length;
        let item_elem = document.createElement('div');
        item_elem.classList.add(`items`);
        item_elem.setAttribute("id",`items${i+1}`);
        let serial_elem =document.createElement('div');
        serial_elem.classList.add('serial');
        serial_elem.innerText=(page*rows_per_page)+i+1;
        item_elem.appendChild(serial_elem);
        let name_elem =document.createElement('div');
        name_elem.classList.add('projects');
        name_elem.innerText=item;
        item_elem.appendChild(name_elem);
        let date_elem =document.createElement('div');
        date_elem.classList.add('startdate');
        date_elem.innerText=date;
        item_elem.appendChild(date_elem);
        let status_elem =document.createElement('div');
        status_elem.classList.add('status');
        if(status=="completed"){
          status_elem.classList.add('completed');
        }
        else{
          status_elem.classList.add('pending');
        }
        status_elem.innerText=status;
        item_elem.appendChild(status_elem);
        let team_elem =document.createElement('div');
        team_elem.classList.add('team');
       for(let k=0;k<team_length;k++){
        let img = paginatedItems[i]["Team"][k];
        imgstr+=`<img class="team_img"src=${img}/>`;
       }
       team_elem.innerHTML=imgstr;
       item_elem.appendChild(team_elem);
       imgstr="";
        let progress_elem =document.createElement('div');
        let progressstr="";
        progress_elem.classList.add('progress');
        progressstr=``
        progress_elem.innerText=progress;
        item_elem.appendChild(progress_elem);
        let action_elem =document.createElement('div');
        let actionstr='';
        actionstr+=`<div><button class="editbutton" onclick=editFunction(${(page*rows_per_page)+i})><i class="fas fa-edit"></i></button></div>`;
        actionstr+=`<div><button class="deletebutton" onclick=deleteFunction(${(page*rows_per_page)+i})><i class="fas fa-trash"></i></button></div>`;
        action_elem.classList.add('action');
        action_elem.innerHTML=actionstr;
        item_elem.appendChild(action_elem);
        wrapper.appendChild(item_elem);  
       
        
    }
}
let cdiv = document.getElementById('CenterDIV');
let c2div =document.getElementById('CDIV');
let num=0;
function editFunction(item_number){
  cdiv.style.display='block';
  let name =  document.getElementById('project_name');
  name.value=list_items[item_number]['name'];
  let date = document.getElementById('date_name');
  date.value=list_items[item_number]['date'];
  let status = document.getElementById('status_name');
  status.value=list_items[item_number]['status'];
  let progress = document.getElementById('progress_name');
  progress.value=list_items[item_number]['progress'];
  num=item_number;
}

function closediv(){
  cdiv.style.display='none';
}

function closediv2(){
  c2div.style.display='none';
}

function deleteFunction(item_number){
  console.log(item_number);
  list_items.splice(item_number,1);
 
  displayList(list_items,list_element,rows,current_page)
  setupPagination(list_items,paginaion,rows);
}



function setupPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML="";
    let page_count = Math.ceil(items.length/rows_per_page);
    for(let i=1;i<page_count+1;i++){
        let btn = paginationButton(i,items);
        wrapper.appendChild(btn);
    }

}

function paginationButton(page,items){
    let button = document.createElement('button');
    button.innerText=page;
    
    if(current_page==page){
        button.classList.add('active');
    }
    button.addEventListener('click', function() {
        console.log(items);
        current_page = page;
        displayList(items,list_element,rows,current_page);
        let current_btn = document.querySelector('#pagination button.active')
        current_btn.classList.remove('active');
        button.classList.add('active');
    });

    return button
}
function onSubmit(){
  
  let name =  document.getElementById('project_name').value;
   
  list_items[num]['name'] = name;
  let date = document.getElementById('date_name').value;
  list_items[num]['date']=date;
  let status = document.getElementById('status_name').value;
  list_items[num]['status']=status;
  let progress = document.getElementById('progress_name').value;
  list_items[num]['progress']=progress;
 
  displayList(list_items,list_element,rows,current_page);
  closediv();
  

}
displayList(list_items,list_element,rows,current_page);

setupPagination(list_items,paginaion,rows);
let total = document.getElementById('totalnum');
total.innerText=list_items.length;
let completednum=0;
for(let i=0;i<list_items.length;i++){
  if(list_items[i]['status']=="completed"){
    completednum+=1;
  }
}
let completed = document.getElementById('completednum');
completed.innerText=completednum;

const searchFun = ()=>{
  let filter = document.getElementById('myinput').value.toUpperCase();
  
  for(let i=1;i<=5;i++){
    let items = document.getElementById(`items${i}`);
    let item = items.getElementsByClassName('projects');
    let e =item[0].innerHTML;
    console.log(e);
    if(e.toUpperCase().indexOf(filter) >-1){
      items.style.display="";
    }
    else{
      items.style.display="none";
    }
    
  }


}
function newProject(){
  c2div.style.display='block';
  document.getElementById('project2_name').value="";
  document.getElementById('date2_name').value="";
  document.getElementById('status2_name').value="";
  document.getElementById('progress2_name').value="";

}

function newadd(){
  let newobj={};
  let name =  document.getElementById('project2_name').value;
  let date = document.getElementById('date2_name').value;
  let status = document.getElementById('status2_name').value;
  let progress = document.getElementById('progress2_name').value;
  if(name==""||date==""||status==""||progress==""){
    closediv2();
    
    return
  }
  newobj['name']=name;
  newobj['date']=date;
  newobj['status']=status;
  newobj['Team']=[
    "https://i.pravatar.cc/400?img=36",
    "https://i.pravatar.cc/400?img=16",
    
  ];
  newobj['progress']=progress;
  list_items.push(newobj);
  displayList(list_items,list_element,rows,current_page);
  closediv2();
  console.log(list_items);
  setupPagination(list_items,paginaion,rows);
}