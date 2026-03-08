// "data": [
//     {
//       "id": 1,
//       "title": "Fix navigation menu on mobile devices",
//       "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//       "status": "open",
//       "labels": [
//         "bug",d
//         "help wanted"
//       ],
//       "priority": "high",
//       "author": "john_doe",
//       "assignee": "jane_smith",
//       "createdAt": "2024-01-15T10:30:00Z",
//       "updatedAt": "2024-01-15T10:30:00Z"
//     }


const allTabButton = document.getElementById("all-tab-btn");
const openTabButton = document.getElementById("open-tab-btn");
const closedTabButton = document.getElementById("closed-tab-btn");

function toggleStyle(id){
    
    allTabButton.classList.add("btn-soft", "text-gray-600");
    openTabButton.classList.add("btn-soft", "text-gray-600");
    closedTabButton.classList.add("btn-soft", "text-gray-600");

    allTabButton.classList.remove("btn-info", "text-white");
    openTabButton.classList.remove("btn-info", "text-white");
    closedTabButton.classList.remove("btn-info", "text-white");

    const allIssuesSection = document.getElementById("all-issue-container");
    const openIssuesSection = document.getElementById("open-issue-container");
    const closedIssuesSection = document.getElementById("closed-issue-container");

    const selected = document.getElementById(id);
    toggleButtonStatus = id;
    selected.classList.remove("btn-soft", "text-gray-600");
    selected.classList.add("btn-info", "text-white");

    if(id == "open-tab-btn"){
        allIssuesSection.classList.add("hidden");
        openIssuesSection.classList.remove("hidden");
        closedIssuesSection.classList.add("hidden");
        loadOpenIssues();
    }else if(id == "all-tab-btn"){
        allIssuesSection.classList.remove("hidden");
        openIssuesSection.classList.add("hidden");
        closedIssuesSection.classList.add("hidden");
         loadIssues();
    }else if(id == "closed-tab-btn"){
        allIssuesSection.classList.add("hidden");
        openIssuesSection.classList.add("hidden");
        closedIssuesSection.classList.remove("hidden");
        loadClosedIssues();
    }
}




async function loadIssues() {
  try {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();

    const issues = data.data;

    const allIssues = issues;
    console.log(allIssues.length)
    const totalIssues = document.getElementById("total-count");
    totalIssues.innerText = allIssues.length;

    const container = document.getElementById("all-issue-container");
    container.innerHTML = "";

    allIssues.forEach(issue => {

        let borderColor = "";
        if (issue.status === "open") {
        borderColor = "border-green-600";
        } 
        else if (issue.status === "closed") {
        borderColor = "border-red-600";
        } 
        else {
        borderColor = "border-yellow-500";
        }

      const div = document.createElement("div");

      div.innerHTML = `
        <div class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><img src="./assets/Open-Status.png" alt=""/></figure>
                        <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${issue.status}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${issue.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${issue.labels[1]}</div>
                        </div>
                        <br>
                        <hr class ="bg-slate-500">
                        <p>${issue.assignee}</p>
                        <p>created ${issue.createdAt}</p>
                    </div>
                </div>

        `;

      container.append(div);
    });


  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}

// const loadIssues = () =>{
//     const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
//     fetch(url) 
//       .then((response) => response.json())
//       .then((json) => {
//         displayIssues(json.data);
//       })
// };

// const displayIssues = (posts) => {
//     // 1. get the container and empty the container
//     const container = document.getElementById("all-issue-container");
//     container.innerHTML = " ";

//     posts.forEach((post) => {

//         //2. Create element
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <div class="card h-[100%] bg-base-100 shadow-xl p-5 gap-2">
//                     <div class="flex justify-between">
//                         <figure><img src="./assets/Open-Status.png" alt=""/></figure>
//                         <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${post.status}</div>
//                     </div>
                    
//                     <div class="card-body">
//                         <h2 class="card-title">${post.title}</h2>
//                         <p>${post.description}</p>
//                         <div class="card-actions justify-start">
//                         <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${post.labels[0]}</div>
//                         <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${post.labels[1]}</div>
//                         </div>
//                         <br>
//                         <hr class ="bg-slate-500">
//                         <p>${post.assignee}</p>
//                         <p>created ${post.createdAt}</p>
//                     </div>
//                 </div>

//         `;

//         //3. add to the container
//         container.append(div);
        
//     })
// }

loadIssues();

// const loadOpenIssues = () =>{
//     const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
//     fetch(url) 
//       .then((response) => response.json())
//       .then((json) => {
//         displayOpenIssues(json.data);
//       })
// };

// const displayOpenIssues = (posts) => {
//     // 1. get the container and empty the container
//     const postContainer = document.getElementById("open-issue-container");
//     postContainer.innerHTML = " ";

//     posts.forEach((post) => {
//         let postStatus = "${post.status}";
//         if(postStatus === "open"){
//         const postCard = document.createElement("div");
//         postCard.innerHTML = `
//         <div class="card h-[100%] bg-base-100 shadow-xl p-5 gap-2">
//                     <div class="flex justify-between">
//                         <figure><img src="./assets/Close-Status.png" alt=""/></figure>
//                         <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${post.status}</div>
//                     </div>
                    
//                     <div class="card-body">
//                         <h2 class="card-title">${post.title}</h2>
//                         <p>${post.description}</p>
//                         <div class="card-actions justify-start">
//                         <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${post.labels[0]}</div>
//                         <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${post.labels[1]}</div>
//                         </div>
//                         <br>
//                         <hr class ="bg-slate-500">
//                         <p>${post.assignee}</p>
//                         <p>created ${post.createdAt}</p>
//                     </div>
//                 </div>

//         `;

        
//         }
//         //3. add to the container
//         postContainer.append(postCard);
   
//     })
// }

async function loadOpenIssues() {
  try {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();

    const issues = data.data;

    // filter only open issues
    const openIssues = issues.filter(issue => issue.status === "open");

    const container = document.getElementById("open-issue-container");
    container.innerHTML = "";

    openIssues.forEach(issue => {

        let borderColor = "";
        if (issue.status === "open") {
        borderColor = "border-green-600";
        } 
        else if (issue.status === "closed") {
        borderColor = "border-red-600";
        } 
        else {
        borderColor = "border-yellow-500";
        }

      const div = document.createElement("div");

      div.innerHTML = `
        <div class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><img src="./assets/Open-Status.png" alt=""/></figure>
                        <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${issue.status}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${issue.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${issue.labels[1]}</div>
                        </div>
                        <br>
                        <hr class ="bg-slate-500">
                        <p>${issue.assignee}</p>
                        <p>created ${issue.createdAt}</p>
                    </div>
                </div>

        `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}


async function loadClosedIssues() {
  try {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();

    const issues = data.data;

    // filter only closed issues
    const closedIssues = issues.filter(issue => issue.status === "closed");

    const container = document.getElementById("closed-issue-container");
    container.innerHTML = "";

    closedIssues.forEach(issue => {
        let borderColor = "";
        if (issue.status === "open") {
        borderColor = "border-green-600";
        } 
        else if (issue.status === "closed") {
        borderColor = "border-red-600";
        } 
        else {
        borderColor = "border-yellow-500";
        }

      const div = document.createElement("div");
      div.innerHTML = `
        <div class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><i class="fa-regular fa-circle-check"></i></figure>
                        <div class="badge badge-soft badge-secondary bg-pink-300 rounded-full">${issue.status}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>${issue.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>${issue.labels[1]}</div>
                        </div>
                        <br>
                        <hr class ="bg-slate-500">
                        <p>${issue.assignee}</p>
                        <p>created ${issue.createdAt}</p>
                    </div>
                </div>

        `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}

