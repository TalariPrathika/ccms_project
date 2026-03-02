function login() {
    let id = document.getElementById("studentId").value;
    let email = document.getElementById("email").value;

    if (id === "" || email === "") {
        alert("Enter all details");
        return;
    }

    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("menuSection").classList.remove("hidden");
}

function showSection(sectionId) {
    document.getElementById("menuSection").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
}

function goBack() {
    let sections = ["library","college","hostel","hospital"];
    sections.forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });
    document.getElementById("menuSection").classList.remove("hidden");
}

/* LIBRARY BOOK SEARCH DEMO */
let books = ["Java Programming", "Data Structures", "DBMS", "Operating Systems"];

function searchBook() {
    let search = document.getElementById("bookSearch").value;
    let result = document.getElementById("bookResult");

    if (books.includes(search)) {
        result.innerHTML = "Book Available ✅";
    } else {
        result.innerHTML = "Book Not Available ❌";
    }
}

function submitSuggestion() {
    alert("Book suggestion submitted!");
    document.getElementById("bookSuggestion").value = "";
}

/* HOSTEL */
function submitHostelComplaint() {
    alert("Hostel complaint submitted!");
    document.getElementById("hostelDesc").value = "";
}

/* COLLEGE */
function submitCollegeComplaint() {
    alert("College complaint submitted!");
    document.getElementById("collegeDesc").value = "";
}
