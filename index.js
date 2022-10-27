const getNews = async()=>{
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myNews = document.querySelector("#mynews");
        myNews.innerHTML = data.value;
        
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", ()=>{
    getNews();
})