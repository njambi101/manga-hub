fetch('https://kitsu.app/api/edge/manga')
.then((res) => {
    const response = res.json()
    return response
})
.then((data) => {
    console.log(data)
})







//const res = await fetch(`https://api.jikan.moe/v4/manga/{id)/full)`;

/*const first = JSON.data?.[0];
const title = first?.attributes?.canonicalTitle;
console.log("Title:", title)
*/






const imgelement = document.getElementById("anime-image");
async function displayImage(){
    try{
    const res = await fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy+bebop&page[limit]=1");
    const data  = await res.json();
    const imageUrl = data[0].attributes.postImage.medium;
    imgelement.src = imageUrl;
    }
    catch(error){
        console.error("Error loading Kitsu image:", error);
    }
}
displayImage()
//console.log(data[0].attributes.description)
//filter[text]=cowboy+bebop&page[limit]=1