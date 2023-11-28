const profileDropdown = document.getElementById("profile-dropdown");
const profile = document.getElementById("profile");

function profileClick() {
    if(profileDropdown.style.display === "none") {
        profileDropdown.style.display = "block";
    }else {
        profileDropdown.style.display = "none"
    }
}


const toogleBtn = document.getElementById("toogle");
function toogleMenu() {
    if(toogleBtn.style.display === "none"){
        toogleBtn.style.display = "block";
    }else if(toogleBtn.style.width > 700){
        toogleBtn.style.display = "none";
    }
    else {
        toogleBtn.style.display = "none";
    }
}