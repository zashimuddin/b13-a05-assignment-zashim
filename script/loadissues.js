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

const loadIssueDetails = async(id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayIssueDetails(data.data);
};

const displayIssueDetails = (issue) => {
    console.log(issue);
    const detailsModalBox = document.getElementById("modal-details-container");
    detailsModalBox.innerHTML = `
            <div class="card bg-base-100 w-100 max-sm:5 border p-2 gap-2">
                    <div class="card-body gap-3">
                        <h2 class="card-title">${issue.title}</h2>
                        <div class="flex item-center gap-3">
                            <div class="badge badge-primary bg-green-600 rounded-full">${issue.status}</div>
                            <div class="text-xs text-gray-400">
                                    <ul class="flex items-center gap-3 text-[10px] text-gray-400">
                                    <li><i class="fa-regular fa-circle-dot"></i>Opened by ${issue.assignee}</li>
                                    <li><i class="fa-regular fa-circle-dot"></i>${issue.createdAt}</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card-actions pt-5 justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full"><i class="fa-solid fa-bug"></i>Bug</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full"><i class="fa-regular fa-life-ring"></i>Help Wanted</div>
                        </div>
                    <div class="pt-5 pb-5">
                        <p class="text-sm text-gray-600">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                    <div class="flex w-85 items-center justify-between bg-base-100 bg-slate-300 shadow rounded-md p-5 mx-auto">
                            <div class="card">
                                <p class="text-gray-600">Assignee:</p>
                                <p class="font-bold">${issue.assignee}</p>
                            </div>
                            <div>
                                <p>Priority</p>
                                <div class="badge badge-error bg-red-700 text-white rounded-full">${issue.priority}</div>
                            </div>
                    </div>
                    </div>
                </div>
    `;

    document.getElementById("details_modal").showModal();
};

async function loadIssues() {
  try {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();

    const issues = data.data;

    const allIssues = issues;
    // console.log(allIssues.length)
    const totalIssues = document.getElementById("total-count");
    totalIssues.innerText = allIssues.length;

    const container = document.getElementById("all-issue-container");
    container.innerHTML = "";
    manageSpinner(true);
    
    allIssues.forEach(issue => {

        let borderColor = "";
        let image = "";
        if (issue.status === "open") {
            borderColor = "border-green-600";
            image = '<img src="./assets/Open-Status.png" alt=""/>';
        } 
        else if (issue.status === "closed") {
            borderColor = "border-red-600";
            image = '<i class="fa-regular fa-circle-check"></i>';
        } 
        else {
            borderColor = "border-yellow-500";
        }

        let priorityColor = "";
        let badgeColor = "";

        if (issue.priority === "high") {
            priorityColor = "border-red-200";
            badgeColor = "badge-secondary"
        } 
        else if (issue.priority === "medium") {
            priorityColor = "border-yellow-200";
            badgeColor = "badge-warning"
        } 
        else {
            priorityColor = "border-blue-200";
            badgeColor = "badge-error"
        }


      const div = document.createElement("div");

      div.innerHTML = `
        <div onclick="loadIssueDetails(${issue.id})" class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure>${image}</figure>
                        <div class="badge ${badgeColor} ${priorityColor} rounded-full">${issue.priority}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full">${issue.labels[0]} </div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full">${issue.labels[1]}</div>
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
    manageSpinner(false);

  } catch (error) {
    console.error("Error fetching issues:", error);
    manageSpinner(false);
  }
  
} 
loadIssues();


async function loadOpenIssues() {
  try {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();

    let issues = data.data;

    // filter only open issues
    const openIssues = issues.filter(issue => issue.status === "open");

    const container = document.getElementById("open-issue-container");
    container.innerHTML = "";
    manageSpinner(true);

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

        let priorityColor = "";

        if (issue.priority === "high") {
            priorityColor = "border-red-200";
            badgeColor = "badge-secondary"
        } 
        else if (issue.priority === "medium") {
            priorityColor = "border-yellow-200";
            badgeColor = "badge-warning"
        } 
        else {
            priorityColor = "border-blue-200";
            badgeColor = "badge-error"
        }

      const div = document.createElement("div");

      div.innerHTML = `
        <div onclick="loadIssueDetails(${issue.id})" class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><img src="./assets/Open-Status.png" alt=""/></figure>
                        <div class="badge ${badgeColor} ${priorityColor} rounded-full">${issue.priority}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full">${issue.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full">${issue.labels[1]}</div>
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
    manageSpinner(false);
  } catch (error) {
    console.error("Error fetching issues:", error);
    manageSpinner(false);
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
    manageSpinner(true);

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

        let priorityColor = "";

        if (issue.priority === "high") {
            priorityColor = "border-red-200";
            badgeColor = "badge-secondary"
        } 
        else if (issue.priority === "medium") {
            priorityColor = "border-yellow-200";
            badgeColor = "badge-warning"
        } 
        else {
            priorityColor = "border-blue-200";
            badgeColor = "badge-error"
        }

      const div = document.createElement("div");
      div.innerHTML = `
        <div onclick="loadIssueDetails(${issue.id})" class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure><i class="fa-regular fa-circle-check"></i></figure>
                        <div class="badge ${badgeColor} rounded-full">${issue.priority}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full">${issue.labels[0]}</div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full">${issue.labels[1]}</div>
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
    manageSpinner(false);
  } catch (error) {
    console.error("Error fetching issues:", error);
    manageSpinner(false);
  }
}

const manageSpinner = (status) => {
    spinnerStatus = document.getElementById("spinner_section");
    if(status == true){
        spinnerStatus.classList.remove("hidden");
        // console.log("Spinner Activate");
    } else if (status == false){
        spinnerStatus.classList.add("hidden");
        // console.log("Spinner De-activate");
        
    }  
};

// =============== Search button Functionality started from here===============

document.getElementById("search-btn").addEventListener("click", async () => {

    const inputValue = document.getElementById("input-search");
    const searchValue = inputValue.value.trim().toLowerCase();

    try {

        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const data = await res.json();

        const issues = data.data;

        const filteredIssues = issues.filter(issue =>
            issue.title.toLowerCase().includes(searchValue) ||
            issue.description.toLowerCase().includes(searchValue) ||
            issue.priority.toLowerCase().includes(searchValue) ||
            issue.labels.some(label => label.toLowerCase().includes(searchValue))
        );

        displaySearchResults(filteredIssues);

    } catch (error) {
        console.error("Search error:", error);
    }

});

function displaySearchResults(issues){

    const container = document.getElementById("all-issue-container");
    container.innerHTML = "";

    if(issues.length === 0){
        container.innerHTML = "<p class='text-center text-gray-500'>No issues found</p>";
        return;
    }

    issues.forEach(issue => {

        let borderColor = "";
        let image = "";
        if (issue.status === "open") {
            borderColor = "border-green-600";
            image = '<img src="./assets/Open-Status.png" alt=""/>';
        } 
        else if (issue.status === "closed") {
            borderColor = "border-red-600";
            image = '<i class="fa-regular fa-circle-check"></i>';
        } 
        else {
            borderColor = "border-yellow-500";
        }

        let priorityColor = "";
        let badgeColor = "";

        if (issue.priority === "high") {
            priorityColor = "border-red-200";
            badgeColor = "badge-secondary"
        } 
        else if (issue.priority === "medium") {
            priorityColor = "border-yellow-200";
            badgeColor = "badge-warning"
        } 
        else {
            priorityColor = "border-blue-200";
            badgeColor = "badge-error"
        }


      const div = document.createElement("div");

      div.innerHTML = `
        <div onclick="loadIssueDetails(${issue.id})" class="card h-[100%] bg-base-100 border-t-4 ${borderColor} shadow-xl p-5 gap-2">
                    <div class="flex justify-between">
                        <figure>${image}</figure>
                        <div class="badge ${badgeColor} ${priorityColor} rounded-full">${issue.priority}</div>
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title">${issue.title}</h2>
                        <p>${issue.description}</p>
                        <div class="card-actions justify-start">
                        <div class="badge badge-outline badge-error bg-red-200 rounded-full">${issue.labels[0]} </div>
                        <div class="badge badge-outline badge-error bg-yellow-200 rounded-full">${issue.labels[1]}</div>
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

}