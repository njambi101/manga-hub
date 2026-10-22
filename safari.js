 //fetch(`https://kitsu.io/api/edge/manga`)
async function searchManga() {
    const url = `https://kitsu.io/api/edge/manga`;
    
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const res = await response.json();
        
        // Return the data so you can use it outside or handle the display logic
        return res.data; 

    } catch (error) {
        console.error("Failed to fetch anime data:", error);
    }
}

// Handle DOM updates and events SEPARATELY from the fetch function
const btn = document.querySelector('.bun1');
const image = document.querySelector('.img');
const synopsis = document.querySelector('.synopsis');

btn.addEventListener('click', async () => {
    // 1. Fetch the data when the button is clicked
    const mangaList = await searchManga();
    
    if (mangaList && mangaList.length > 0) {
        // 2. Pick a manga (e.g., the first one in the list)
        const anime = mangaList[0]; 
        
        // 3. Update the DOM once
        image.innerHTML = `Title: ${anime.attributes.canonicalTitle}`;
        synopsis.innerHTML = `Synopsis: ${anime.attributes.synopsis}`;
    }
});


/*async function searchAnime(animeName) {
  //const baseUrl = "https://kitsu.io";
  // The API requires query brackets to be percent-encoded: filter%5Btext%5D=name
  const url = `https://kitsu.io${baseUrl}?filter[text]=${encodeURIComponent(animeName)}&page[limit]=5`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const json = await response.json();
    
    // JSON:API wraps resources inside a 'data' array
    json.data.forEach(anime => {
      console.log(`Title: ${anime.attributes.canonicalTitle}`);
      console.log(`Synopsis: ${anime.attributes.synopsis}`);
      console.log(`Poster Image: ${anime.attributes.posterImage.small}`);
    });
    
    return json.data;
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
  }
}

// Usage:
searchAnime("Cowboy Bebop");*/ 







//const res = await fetch(`https://api.jikan.moe/v4/manga/{id)/full)`;

/*const first = JSON.data?.[0];
const title = first?.attributes?.canonicalTitle;
console.log("Title:", title)
*/






/*const imgelement = document.getElementById("anime-image");
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
//filter[text]=cowboy+bebop&page[limit]=1*/ 