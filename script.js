const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);

}

const displayPosts = (posts)=>{

    
    posts.forEach(post=>{
    const postList = document.getElementById('left-side');
    const div = document.createElement('div');
    const active = document.getElementById('active');
    
    div.classList.add('flex', 'items-start', 'rounded-3xl', 'border', 'bg-body', 'p-3', 'gap-4','w-full');
    // div.classList.add('flex', 'items-start', 'p-4');
    
      
        div.innerHTML =`
        
                            <div id="active" class="avatar online">
                                <div class="w-20 rounded">
                                <img
                                    src="${post.image}"
                                    alt="post-image" />
                                </div>
                            </div>
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center gap-2">
                                    <span># ${post.category}</span>
                                <span> Author: ${post.author?.name}</span>
                                </div>
                                <h6>${post.title}</h6>
                                <p class="text-start">${post.description}</p>
                                <hr>
                                <div class="flex items-center justify-between">
                                    <div class="flex gap-4">
                                        <span class="flex gap-3"><img src="./images/tabler-icon-message-2.svg" alt=""> ${post.comment_count}</span>
                                        <span class="flex gap-3"><img src="./images/tabler-icon-eye.svg" alt="">${post.view_count} </span>
                                        <span class="flex gap-3"><img src="./images/tabler-icon-clock-hour-9.svg" alt=""> ${post.posted_time}</span>
                                        
                                    </div>
                                        <div>
                                        <img onclick="showDetails({ title: '${post.title}', viewCount: '${post.view_count}' })" src="./images/email 1.svg" alt="">
                                        </div>
                                </div>
                            </div>  
        `

        
        postList.appendChild(div);
        
        
    })

    
}
const showDetails = ({ title, viewCount }) => {
    const rightSide = document.getElementById('right-side');
    
    
    
    const div1 = document.createElement('div');
    div1.classList.add('flex', 'items-start', 'justify-between', 'bg-body', 'p-3', 'rounded-3xl');
    div1.innerHTML = `<h6>${title}</h6>
                    <div class="flex items-center"><img src="./images/tabler-icon-eye.svg" alt="">
                        <p>${viewCount}</p>
                    </div> `
    rightSide.appendChild(div1);
    
    
    setCounter();
    // fetch post details and display in modal or new page.
    
    
}
const setCounter = ()=>{
    const counterElement = document.getElementById("counter");
      const currentCount = parseInt(counterElement.innerText);
      const newCount = currentCount + 1;
      counterElement.innerText = newCount;
}

const handleSearch = ()=>{
    const searchTerm = document.getElementById('search-input').value;
    
}

loadData();