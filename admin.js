let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

let lib = 0, col = 0, hos = 0;

let list = document.getElementById("complaintList");

complaints.forEach(c => {
    let li = document.createElement("li");
    li.innerHTML = c.department.toUpperCase() + " : " + c.text;
    list.appendChild(li);

    if(c.department === "library") lib++;
    if(c.department === "college") col++;
    if(c.department === "hostel") hos++;
});

document.getElementById("libCount").innerText = lib;
document.getElementById("colCount").innerText = col;
document.getElementById("hosCount").innerText = hos;

function logout() {
    window.location.href = "index.html";
}
