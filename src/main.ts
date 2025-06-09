enum Status {
    Inactive,
    Applied,
    Interviewed,
    Offered
}

class JobApplication {
    position: string;
    company: string;
    location: string;
    compensation: string;
    dateApplied: Date;
    status: Status;
    postingUrl: URL;
    resumeUrl: URL;
    coverLetterUrl: URL;
    notes: string;
    constructor(position: string, company: string, location: string, compensation: string, dateApplied: Date, status: Status, postingUrl: URL, resumeUrl: URL, coverLetterUrl: URL, notes: string) {
        this.position = position;
        this.company = company;
        this.location = location;
        this.compensation = compensation;
        this.dateApplied = dateApplied;
        this.status = status;
        this.postingUrl = postingUrl;
        this.resumeUrl = resumeUrl;
        this.coverLetterUrl = coverLetterUrl;
        this.notes = notes;
    }
}

class JobTracker {
    private data: JobApplication[];
    private tableBodyEl: HTMLDivElement;
    private addRowBtnEl: HTMLButtonElement;
    private headerEls: NodeListOf<HTMLDivElement>;
    readonly LOCAL_STORAGE_NAME: string = "jobspank-job-tracker"
    constructor() {
        this.data = [];
        this.tableBodyEl = document.querySelector(".table-body") as HTMLDivElement;
        this.addRowBtnEl = document.getElementById("add-row-btn") as HTMLButtonElement;
        this.headerEls = document.querySelectorAll(".input-header") as NodeListOf<HTMLDivElement>;
        this.loadData();
    }
    private loadData() {
        if (localStorage.getItem(this.LOCAL_STORAGE_NAME)) {
            this.data = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_NAME) || "");
        }
    }
    private saveData() {
        localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(this.data));
    }
    public deleteData(index: number) {
        //
    }   
    private setupEventListeners() {
        //
    }
    public renderData() {
        //
    }
    
    public addRow() {
        //
    }
    

}




// //RENDER DATA
// function render_data () {
//     tbodyEl.innerHTML = ""
//     data.forEach((datum, i) => {
//         const rowContainer = document.createElement("div")
//         rowContainer.dataset.row = i;
//         rowContainer.classList.add("row-container")
//         //DATA COLUMNS
//         const newRow = document.createElement("div")
//         newRow.dataset.row = i;
//         newRow.classList.add("editable-row")
//         headerEls.forEach((el, j) => {
//             const key = Array.from(headerEls).map(el => el.textContent.trim())[j]
//             let newCell;
            
//             if (key.includes("Date")) {
//                 newCell = document.createElement("input");
//                 newCell.type = "date";
//                 newCell.value = datum[key] || "";  // set value for date input
//             } 
//             else if (key.includes("Status")) {
//                 newCell = document.createElement("select");
//                 newCell.innerHTML = `
//                     <option value="inactive">Inactive</option>
//                     <option value="applied">Applied</option>
//                     <option value="interviewed">Interviewed</option>
//                     <option value="offered">Offered</option>
//                 `;
//                 newCell.value = datum[key] || "inactive";  // set selected value
//             }
//             else if (key.includes("Position")) {
//                 newCell = document.createElement("a");
//                 newCell.setAttribute("href", datum["Url"]);
//                 newCell.textContent = datum[key];
//                 newCell.addEventListener("click", (e) => {
//                     e.preventDefault()
//                     newCell.setAttribute("contenteditable", "true");
//                     newCell.focus()
//                     // window.open(datum["Url"], target="_blank")
//                 })
//                 newCell.addEventListener("dblclick", (e) => {
//                     e.preventDefault()
//                     if (datum["Url"]) {
//                         window.open(datum["Url"], target="_blank")
//                         console.log("open sesame")
//                     }
//                 })
//                 newCell.addEventListener("blur", (e) => {
//                     e.preventDefault()
//                     newCell.setAttribute("contenteditable", "false");
//                 })
//             }                    
//             else {
//                 newCell = document.createElement("div");
//                 newCell.setAttribute("contenteditable", "true");
//                 newCell.textContent = datum[key];
//             }

//             newCell.dataset.row = i;
//             newCell.dataset.key = key;
//             newCell.classList.add("editable-cell");

//             newRow.appendChild(newCell);
//         });

//         //EXTRA CONTAINER
//         const newData = document.createElement("div")

//         newData.dataset.row = i;
//         newData.classList.add("editable-data")

//         //URL INPUT
//         const urlEl = document.createElement("div")
//         urlEl.dataset.row = i;
//         urlEl.dataset.key = "Url";
//         urlEl.classList.add("side-container")
//         urlEl.innerHTML = `<div class="side-label"><a href="${data[i].Url}">Job Posting Link:</a> </div> <div data-row="${i}" data-key="Url" class="editable-cell" contenteditable="true">${data[i].Url}</div>`

//         //CUSTOM RESUME
//         const resumeLinkEl = document.createElement("div")
//         resumeLinkEl.dataset.row = i;
//         resumeLinkEl.dataset.key = "ResumeUrl";
//         resumeLinkEl.classList.add("side-container")
//         resumeLinkEl.innerHTML = `<div class="side-label"><a href="${data[i].Resume}">Resume Link:</a> </div> <div data-row="${i}" data-key="Resume" class="editable-cell" contenteditable="true">${data[i].Resume}</div>`
//         //CUSTOM COVER LETTER
//         const coverLetterLinkEl = document.createElement("div")
//         coverLetterLinkEl.dataset.row = i;
//         coverLetterLinkEl.dataset.key = "CoverLetterUrl";
//         coverLetterLinkEl.classList.add("side-container")
//         coverLetterLinkEl.innerHTML = `<div class="side-label"><a href="${data[i].CoverLetter}">Cover Letter Link:</a> </div> <div data-row="${i}" data-key="CoverLetter" class="editable-cell" contenteditable="true">${data[i].CoverLetter}</div>`


//         //NOTES INPUT
//         const notesEl = document.createElement("div")
//         notesEl.dataset.row = i;
//         notesEl.dataset.key = "Notes";
//         notesEl.classList.add("side-container")
//         notesEl.innerHTML = `<div class="side-label">Notes: </div> <div data-row="${i}" data-key="Notes" class="editable-cell" contenteditable="true">${data[i].Notes}</div>`

//         //DELETE BUTTON
//         const deleteButton = document.createElement("button")
//         deleteButton.dataset.row = i;
//         deleteButton.textContent = "Delete"
//         deleteButton.classList.add("delete-btn")
//         deleteButton.addEventListener("click", () => {
//             delete_row(i)
//         })
//         newData.appendChild(deleteButton)
//         newData.appendChild(notesEl)
//         newData.appendChild(urlEl)
//         newData.appendChild(resumeLinkEl)
//         newData.appendChild(coverLetterLinkEl)
        
//         rowContainer.addEventListener("mouseover", () => {
//             newData.style.maxHeight = "400vh"
//         })
//         rowContainer.addEventListener("mouseleave", () => {
//             newData.style.maxHeight = "0px"
//         })
//         rowContainer.appendChild(newRow)
//         rowContainer.appendChild(newData)
//         tbodyEl.appendChild(rowContainer)
//     })
// }
// render_data()
// function addRow ()  {
//     // console.log("yeeoo")
//     const newRowData = Object.fromEntries(
//         Array.from(headerEls).map(el => [el.textContent.trim(), ""])
//     );
//     newRowData.Url = ""
//     newRowData.Notes = ""
//     newRowData.Resume = ""
//     newRowData.CoverLetter = ""
//     const today = new Date();
//     const formattedDate = today.toISOString().split('T')[0];
//     newRowData["Date Applied"] = formattedDate
//     data.push(newRowData)
//     localStorage.setItem(DATA_NAME, JSON.stringify(data))
//     render_data()
// }

// //DELETE ROW
// const delete_row = (i) => {
//     const newData = data.filter((el, j) => j !== i)
//     console.log(newData)
//     data = newData
//     localStorage.setItem(DATA_NAME, JSON.stringify(data));
//     render_data()
// }

// //CLEAR STORAGE
// // clearBtnEl.addEventListener("click", async () => {
// //     if (data.length === 0) {
// //         return
// //     }
// //     data = []
// //     await localStorage.setItem(DATA_NAME, JSON.stringify(data))
// //     console.log(data)
// //     render_data()
// // })

// addRowBtnEl.addEventListener("click", addRow)

// //SAVE DATA
// document.body.addEventListener("focusout", (event) => {
//     if (event.target.matches(".editable-cell")) {
//         const row = event.target.dataset.row;
//         const key = event.target.dataset.key;
//         let value;

//         if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
//             value = event.target.value;
//         } else {
//             value = event.target.innerText.trim();
//             event.target.innerText = value; // Trim visible text
//         }

//         console.log(`Save Changes: ${row}, ${key}`);
//         data[row][key] = value;
//         console.log(data);

//         localStorage.setItem(DATA_NAME, JSON.stringify(data));
//     }
// });
