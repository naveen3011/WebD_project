const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storecompanies = document.getElementById("companies")
    const company = document.querySelectorAll(".company")
    const cname = storecompanies.getElementsByTagName("h2")

    for(var i=0; i<cname.length; i++){
        let match = company[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                company[i].style.display = "";
            }else{
                company[i].style.display = "none";
            }
        }
    }
}