function loadNavbar() {
    const navbarHTML = `
        <div class="topnav">
            <div id="logo-and-name">
                <img src="../LogoOG1212.jpg" alt="DaniellPan Logo" width="50px" height="50px">
                <h2 href="index.html" class="active">DaniellPan.com</h2>
            </div>
            <div id="myLinks">
                <a href="../index.html">Home</a>
                <a href="../tutorials.html">Tutorials</a>
                <a href="../projects.html">Projects</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML;

    // Add the myFunction script
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    // Attach the function to the window object
    window.myFunction = myFunction;
}

document.addEventListener('DOMContentLoaded', loadNavbar);
