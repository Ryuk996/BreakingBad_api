function searchtab() {
    const prodcontainer = document.createElement("div");
    prodcontainer.className = "search-prod-container";
         prodcontainer.innerHTML =   `<h1 class = "header"> Breaking Bad</h1>
         <p class = "tag">I'm the one who knocks</p></br>
         <div class="bar">
         <input class='search_epi'onclick="refreshUsers()" placeholder='Episodes'/>
            <button class="search" onclick="getEpisodes()"> Search </button>
            
            <input class='search_char' onclick="refreshUsers()" placeholder='characters'/>
            <button class="search" onclick="getCharacters()"> Search </button>
            
            <input class='search_quotes' onclick="refreshUsers()" placeholder='Quotes'/>
            <button class="search" onclick="getQuotes()"> Search </button>
            </div>
            `;
            
            document.body.append(prodcontainer);
            
  }

  async function getQuotes() {
    const quot = document.querySelector(".search_quotes").value;
    if(quot==""){
        alert("enter the author name")
    }
    else{
    const data = await fetch(
      `https://breakingbadapi.com/api/quote?author=${quot}`, 
      {
        method: "GET"
      }
    );
    
      try {
        const quotes = await data.json();  
        console.log(quotes); //calling a function to print the data
        loadQuot(quotes)
      }
      // alerts the user if fetching from api fails
      catch {
        alert("please check your connection/ data not available now");
      }
    
    }
}

  async function getCharacters() {
    const charact = document.querySelector(".search_char").value;
    if(charact==""){
        alert("enter the character name")
    }
    else{
    const data = await fetch(
      `https://breakingbadapi.com/api/characters?name=${charact}`, 
      {
        method: "GET"
      }
    );
    
      try {
        const characters = await data.json();  
        console.log(characters); //calling a function to print the data
        loadcharc(characters)
      }
      // alerts the user if fetching from api fails
      catch {
        alert("please check your connection/ data not available now");
      }
    
    }
}

  async function getEpisodes() {
    const epi = document.querySelector(".search_epi").value;
    if(epi==""){
        alert("enter the Episode num")
    }
    else{
    const data = await fetch(
      `https://breakingbadapi.com/api/episodes/${epi}`, 
      {
        method: "GET"
      }
    );
    
      try {
        const episodes = await data.json();  
        console.log(episodes); //calling a function to print the data
        loadEpi(episodes)
      }
      // alerts the user if fetching from api fails
      catch {
        alert("please check your connection/ data not available now");
      }
    
    }
}

async function getBad() {
       
    const data = await fetch(
      `https://breakingbadapi.com/api/characters`, //button number is linked to page number
      {
        method: "GET"
      }
    );
    
      try {
        const users = await data.json();  
        console.log(users); //calling a function to print the data
        loadUsers(users)
      }
      // alerts the user if fetching from api fails
      catch {
        alert("please check your connection/ data not available now");
      }
    
    }
getBad();

  function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list" 
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.img}></img>
  <div class= "card">
  <h5 class="text1" >${user.char_id}</h5> 
  <h5 class="text1">${user.name}</h5>
  <h5 class="text1">${user.category}</h5>                                                            
      <p class="time">${user.nickname}</p> 
  </div>
  </div>`                     

  userList.append(userContainer);                           
  
});
document.body.append(userList);

}
function loadEpi(episodes){
    const userList=document.createElement('div')
    userList.className="user-list" 
    episodes.forEach((episode) => {
  console.log(episode);
  const userContainer=document.createElement('div');        
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  
  <div class= "card">
  <h5 class="text1" >episode_id:${episode.episode_id}</h5> 
  <h5 class="text1">title:${episode.title}</h5>
  <h5 class="text1">series:${episode.series}</h5>
  <h5 class="text1">air_date:${episode.air_date}</h5>
  <h5 class="text1">Characters:${episode.characters}</h5>                                                             
      <p class="time">Season:${episode.season}</p> 
  </div>
  </div>`                     

  userList.append(userContainer);                           
  
});
document.body.append(userList);
}

function loadcharc(characters){
    const userList=document.createElement('div')
    userList.className="user-list" 
    characters.forEach((character) => {
  console.log(character);
  const userContainer=document.createElement('div');        
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content1">
  <img class="image1" src=${character.img}></img>
  <div class= "card">
  <h5 class="text1" >${character.char_id}</h5> 
  <h5 class="text1">${character.name}</h5>
  <h5 class="text1">${character.category}</h5> 
  <h5 class="text1">${character.occupation}</h5>                                                           
      <p class="time">${character.nickname}</p> 
  </div>
  </div>`                     

  userList.append(userContainer);                           
  
});
document.body.append(userList);
}

function loadQuot(quotes){
    const userList=document.createElement('div')
    userList.className="user-list" 
    quotes.forEach((quote) => {
  console.log(quote);
  const userContainer=document.createElement('div');        
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  
  <div class= "card1">
  <h5 class="text1" >${quote.quote_id}</h5> 
  <h5 class="text1">${quote.quote}</h5>
  <h5 class="text1">${quote.author}</h5>                                                            
      <p class="time">${quote.series}</p> 
  </div>
  </div>`                     

  userList.append(userContainer);                           
  
});
document.body.append(userList);
}
function refreshUsers() {
    document.querySelector('.user-list').remove();
    document.querySelector(".search_epi").value="";
    document.querySelector(".search_char").value = "";
    document.querySelector(".search_quotes").value = "";

    
}