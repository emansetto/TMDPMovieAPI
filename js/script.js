var movie_lists= document.getElementById("movie-lists");
const allMovies1=document.getElementById("allMovies-1");
const allMovies2=document.getElementById("allMovies-2");


const _name=document.getElementById("name");
const namealert=document.getElementById("namealert");
const phone=document.getElementById("phone");
const phonealert=document.getElementById("phonealert");
const age=document.getElementById("age");
const agealert=document.getElementById("agealert");
const email=document.getElementById("email");
const emailalert=document.getElementById("emailalert");
const passowrd=document.getElementById("passowrd");
const passowrdalert=document.getElementById("passowrdalert");
const conf_pass=document.getElementById("conf-pass");
const conf_passalert=document.getElementById("conf-passalert");


(function()
{
    _name.setAttribute('display','none');
var lists=document.querySelectorAll(".nav-text");
for(let i=0;i<lists.length;i++)
{
    lists[i].addEventListener("click",function(e)
    {
       var list=["movie/now_playing","movie/popular","movie/top_rated","trending/all/day","movie/upcoming"]
       var element=e.target;
       var x=i;
       console.log(list[i]);
        getData(list[i]);
    })
}
})();

async function getData(list_type)
{
    // if(allMovies1.value!="")
    // {
    //       searchmoviesPage();
    // }
    
         var res = await fetch(`https://api.themoviedb.org/3/${list_type}?api_key=512b8a337c3c1d69c4fca05852918903`,{method:"GET"});
    var movies=await res.json();
    console.log(movies.results);
     display(movies.results)
   
}
async function display(movies) {
    console.log(1);
    console.log(movies.length);
    var Box = ` `;
    for (let i = 0; i < movies.length; i++) {
         console.log("y")
        // Box += `<div class="col-md-3 " onclick="getSpecificRecipe(${food[i].recipe_id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        // <img class="w-100" src="${list_type[i].image_url}"/>
        // <p>${list_type[i].title}</p>
        // </div>
         var img_src= `https://image.tmdb.org/t/p/w500` + await movies[i].poster_path;
         Box+=`
         
         <div class="col-md-4 movie">
         <div class="overflow_help">
        <img class="w-100" src="${img_src}"/>
        <div class="image__overlay image__overlay--primary">
        <h2 class="title">${movies[i].title}</h2>
        <p class="overview">
            ${movies[i].overview}
        </p>
        <p class="vote_average">
            Rate: ${movies[i].vote_average}
        </p>
        <p class="release_date">
            ${movies[i].release_date}
        </p>
    </div>
    </div>
        </div>`;
       console.log(img_src);
    }
     console.log(Box);
     movie_lists.innerHTML = Box;
}
getData("movie/now_playing");


const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".header"),
menu = body.querySelector(".menu"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
nav_links=body.querySelectorAll(".nav-link");

menu.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
if(!sidebar.classList.contains("close"))
{toggle.style.left="230px";
for(let i=0;i<nav_links.length;i++)
{
    console.log(nav_links[i]);
    
    nav_links[i].style.top='18px';
    nav_links[i].style.opacity='1';
    console.log(nav_links.length);
}

}
else{
  toggle.style.left="0px";
  console.log("nav-link");
  for(let i=0;i<nav_links.length;i++)
  { 
    console.log(nav_links[i]);
    nav_links[i].style.top='300px';
    nav_links[i].style.opacity='0';
      console.log(nav_links.length);
  }
}
})
async function searchmoviesPage(searchText)
{
    var res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=512b8a337c3c1d69c4fca05852918903`,{method:"GET"});
    var movies=await res.json();
    var list=[];
    for (let i = 0; i < movies.results.length; i++) {
       
        var mov=movies.results;
        console.log(typeof(mov[i].title));
        var movieTitle=mov[i].title;
    if( movieTitle.toLowerCase().includes(searchText.toLowerCase()))
    { console.log("hello"); 
        list.push(await mov[i]);
        console.log(list)
    }
   
}
console.log(list);
display(list);
}
console.log(allMovies1)
allMovies1.addEventListener('keyup' , (e) =>{
    var searchText=allMovies1.value;
    console.log(allMovies1.value);
    searchmoviesPage(searchText);
});



async function searchmoviesAll(searchText)
{
    var _list=["movie/now_playing","movie/popular","movie/top_rated","movie/upcoming"]
   
        for(let k=0;k<_list.length;k++)
        {
    var res = await fetch(`https://api.themoviedb.org/3/${_list[k]}?api_key=512b8a337c3c1d69c4fca05852918903`,{method:"GET"});
    var movies=await res.json();
    var list=[];
    console.log(movies.results);
    for (let i = 0; i <movies.results.length; i++) {
       
        var mov=movies.results;
        console.log(_list[k]);
        console.log(mov[i]);
        
         var movieTitle=mov[i].title;
      
        console.log(movieTitle);
    if(movieTitle.toLowerCase().includes(searchText.toLowerCase()))
    { console.log("hello"); 
        list.push(await mov[i]);
        console.log(list)
    }
}
   
}
    
console.log(list);
 await display(list);
}
console.log(allMovies2)
allMovies2.addEventListener('keyup' , (e) =>{
    var searchText=allMovies2.value;
    console.log(allMovies2.value);
    searchmoviesAll(searchText);
});

function getinput()
{
    var nameRegex = /^[a-zA-Z\-]+$/;
    var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    var ageRegex=/^\S[0-9]{0,3}$/;
    var numberRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var passowrdRegex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    _name.addEventListener('keyup', (e) => {
        if (!_name.value.match(nameRegex)) {
           
            namealert.style.display='block';  
        }
        else{
            namealert.style.display='none';  
        }
    });
    
    email.addEventListener('keyup', (e) => {
        if (!email.value.match(emailRegex)) {
           
            emailalert.style.display='block';  
        }
        else{
            emailalert.style.display='none';  
        }
    });
    
    passowrd.addEventListener('keyup', (e) => {
        if (!passowrd.value.match(passowrdRegex)) {
           
            passowrdalert.style.display='block';  
        }
        else{
            passowrdalert.style.display='none';  
        }
    })

    conf_pass.addEventListener('keyup', (e) => {
        if (conf_pass.value===conf_pass.value) {
           
            conf_passalert.style.display='block';  
        }
        else{
            conf_passalert.style.display='none';  
        }
    })
    age.addEventListener('keyup', (e) => {
        if (!age.value.match(ageRegex)) {
           
            agealert.style.display='block';  
        }
        else{
            agealert.style.display='none';  
        }
    })
    
    phone.addEventListener('keyup', (e) => {
        if (!phone.value.match(numberRegex)) {
           
            phonealert.style.display='block';  
        }
        else{
            phonealert.style.display='none';  
        }
    })
}
getinput();