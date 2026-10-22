async function searchManga(query) {
    
    const url =  `https://kitsu.io/api/edge/manga`;
    
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
        console.log('Comment data is still loading or element missing.');
    }
});
       
const postBtn = document.querySelector('.post')
const commentInput = document.querySelector('#new-comment')
const commentSections = document.querySelector('.read-here')
postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = commentInput.value.trim()
    if(!text) {
        alert("Please write something before posting!")        
        return;
    }


fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method : 'POST',
    body : JSON.stringify({
        body : text,
        postId : 1,
        name: "Anonymous User",
        email: "user@example.com"
    }),
    headers : {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then(res => {
    const response = res.json()
    return response
})
.then(newComment => {


   if(commentSections) {
    commentSections.innerHTML += `
                <div class="comment-card">
                    <strong>${newComment.name}</strong> (${newComment.email})
                    <p>${newComment.body}</p>
                </div>`;
   }

   commentInput.value = '';

}).catch(error =>
    console.error("there is ", error)
)
})