
document.querySelector("#dropdown").addEventListener("click", () => {
    // let dropDownMenuDisplayProp
    if (document.querySelector(".dropdown-menu").style.display === "none" || document.querySelector(".dropdown-menu").style.display === "") {
            document.querySelector(".dropdown-menu").style.display = "block";
    } else {
            document.querySelector(".dropdown-menu").style.display = "none";
    }
})