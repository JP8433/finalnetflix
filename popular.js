let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bbea4df578d70d92ffe6d555ef5cfa71";

let searchurl = "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=bbea4df578d70d92ffe6d555ef5cfa71&query=";

let imageurl = "https://image.tmdb.org/t/p/w500/";

async function getMovieData(url) {
    let data = await fetch(url)
    let res = await data.json()
    //console.log(res)
    console.log(res.results)
    showMovies(res.results)
}
let mainMovieDiv=document.getElementById("mainMovieDiv")
function showMovies(movies){
    mainMovieDiv.innerHTML="";
    
    console.log(movies);
    movies.map((element)=>{
        var movieDiv=document.createElement("div")
        movieDiv.classList.add("col","movie")
        console.log(element)
        movieDiv.innerHTML=
        `
          <div class="card ">
          <img src=${imageurl+element.backdrop_path}>
          <div class="card-body m-1 p-0">
            <div class="d-flex justify-content-between">
            <h5 class="card-title">${element.original_title}</h5>
            <h6 class=""><span class='${getClassByRate(element.vote_average)}'>${element.vote_average}</span></h6>
            </div>

            
        
        
        `
        mainMovieDiv.append(movieDiv)
    })
}
getMovieData(url)
let form = document.getElementById('form')
let search = document.getElementById('search')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var searchTerm = search.value
    console.log(searchTerm)
    console.log(searchurl + searchTerm)
    if (searchTerm && searchTerm.value !== "") {
        getMovieData(searchurl + searchTerm)
        searchTerm.value = ""
    }
    else {
        window.location.reload()
    }
})


function getClassByRate(vote){
    if (vote>=7)
    {
        return "green";
    
    }
else if(vote>=6){
    return "orange";
}else{
    return "red";
}


}

