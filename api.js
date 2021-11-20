 let searchInput  = document.getElementById('search');
let template = document.getElementById('template');

searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
      let searchText = e.target.value;
        search(searchText);
    }
})

async function search(searchValue){
   let URL = "https://api.covid19api.com/country";
   let data = await fetch(`${URL}/${searchValue}`);
   let json = await data.json();
   console.log(json);
   let{Date,Country,Deaths,Confirmed,Active,CountryCode,Recovered,Lat} = json[635];

   template.innerHTML=`
   <main>
     <div class="bg">  
       <p id="country">${Country}</p>
       <div id="newCases">
         <p>${Confirmed}</p>
         <p>+New Cases</p>
       </div>
       <div id="content">
                <span>●  Sources:<a herf="#"class="tracker">COVID-19 Tracker</a></span>
                <span><a herf="#" class="ministry">● Ministry of Health & Family Welfare</a></span>
        </div>
       <div id="deaths">
         <p>${Deaths}</p>
         <p>Deaths</p>
       </div>
       <div id="first">
         <p class="active">${Active}</p>
         <p class="total">Total Cases</p>
       </div>
       <div id="second">
         <p class="lon">${CountryCode}</p>
         <p class="count">Country Code</p>
       </div>
       <div id="third">
         <p class="lock"><i class="fas fa-lock"></i></p>
         <p class="ppl">People Vaccinated</p>
       </div>
       <div id="date">
          <p class="time">${Date}</p>
          <p class="date">Date</p>
       </div>
       <div id="recovery">
         <p class="record">${Recovered}</p>
         <p class="record1">Recoveries</p>
       </div> 
       <div id="Late">
         <p class="lat">${Lat}</p>
         <p class="num">Count</p>
       </div> 
     </div>
   </main>`
}