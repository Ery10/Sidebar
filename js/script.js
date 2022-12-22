const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  openSidebar();
});

function openSidebar() {
    document.body.classList.toggle("close");
    document.body.classList.toggle("open");
    if (document.body.classList.contains("close")) {
        const logo = document.querySelector("#logo");
        logo.style.visibility = "hidden";
        menu.style.marginLeft = "-80px";
        menu.style.marginRight = "10px";

        const logOut = document.querySelector("nav div img:nth-child(3)");
        logOut.style.marginLeft = "-92px";

        const input = document.querySelector("#input");
        input.style.visibility = "hidden";

    }else {
        const logo = document.querySelector("header img:first-child");
        logo.style.visibility = "inherit";

        const logOut = document.querySelector("nav div img:nth-child(3)");
        logOut.style.marginLeft = "1px";

        const input = document.querySelector("#input");
        input.style.visibility = "";
    }
}


