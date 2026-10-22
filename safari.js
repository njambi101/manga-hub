

const input = document.querySelector('input-manga')
async function searchManga(query) {
    
    const url = query 
        ? `https://kitsu.io[text]=${encodeURIComponent(query)}`
        : `https://kitsu.io/api/edge/manga`;
    
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
        
       
        return res.data; 

    } catch (error) {
        console.error("Failed to fetch anime data:", error);
    }
}



const title = document.querySelector('.title')  
const images= document.querySelector('.image')
const btn = document.querySelector('.bun1');

const synopsis = document.querySelector('.synopsis');

btn.addEventListener('click', async () => {   
    
   
    const mangaList = await searchManga();
    
    if (mangaList && mangaList.length > 0) {
        
        const anime = mangaList[0];        
        
        title.innerHTML = `Title: ${anime.attributes.canonicalTitle}`;
        synopsis.innerHTML = `Synopsis: ${anime.attributes.synopsis}`;
        const animeImage = anime.posterImage
        images.src = animeImage           
        if (anime.attributes.posterImage && anime.attributes.posterImage.small) {
            images.src = anime.attributes.posterImage.small;
        } else {
            images.src = ""; 
        }

    }

})

let commentData =''; 

fetch('https://jsonplaceholder.typicode.com/comments/15')
  .then(response => response.json())
  .then(data => {
      commentData = data; 
  })
  .catch(error => console.error('Error fetching data:', error));

const commentBtn = document.querySelector('.get-comment');
const commentSection = document.querySelector('.comment-section');
 
commentBtn.addEventListener('click', () => {
   if (commentSection && commentData) {
        commentSection.innerHTML += `<p>${commentData.body}</p>`;
    } else {
        console.error("Could not find the '.comment-section' element in the HTML.");
    }
});
