const loadIssues = () =>{
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // https://phi-lab-server.vercel.app/api/v1/lab/issues
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url) 
      .then((response) => response.json())
      .then((json) => {
        // console.log(data);
        displayIssues(json.data);
      })
};

// "data": [
//     {
//       "id": 1,
//       "title": "Fix navigation menu on mobile devices",
//       "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//       "status": "open",
//       "labels": [
//         "bug",
//         "help wanted"
//       ],
//       "priority": "high",
//       "author": "john_doe",
//       "assignee": "jane_smith",
//       "createdAt": "2024-01-15T10:30:00Z",
//       "updatedAt": "2024-01-15T10:30:00Z"
//     }

const displayIssues = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById("issue-container");
    postContainer.innerHTML = " ";

    posts.forEach((post) => {

        //2. Create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="card h-[100%] bg-base-100 shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><img src="./assets/Open-Status.png" alt=""/></figure>
                        <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${post.status}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${post.title}</h2>
                        <p>${post.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${post.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${post.labels[1]}</div>
                        </div>
                        <br>
                        <hr class ="bg-slate-500">
                        <p>${post.assignee}</p>
                        <p>created ${post.createdAt}</p>
                    </div>
                </div>

        `;

        //3. add to the container
        postContainer.append(postCard);
        
    })
}

//loadIssues();
