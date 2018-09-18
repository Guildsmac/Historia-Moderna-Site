function openNav() {
    let styleWidth = document.getElementById("mySidenav").style.width;
    if(styleWidth=="0px" || styleWidth==0)
        document.getElementById("mySidenav").style.width = "300px";
    else
        document.getElementById("mySidenav").style.width = "0px"
}