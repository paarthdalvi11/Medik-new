// Script For 'Go To Top' Button
window.onscroll = function()
{
    scrollFunction()
};
function scrollFunction() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("myBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Script For Responsive Navbar

function sideNavTrigger()
{
    if (document.getElementById("sideNav").style.visibility === "hidden" || document.getElementById("sideNav").style.visibility === "") 
    {
        document.getElementById("sideNav").style.visibility = "visible";
        document.getElementById("sideNav").style.animation = "fade-in 0.4s";
    }
    else
    {
        document.getElementById("sideNav").style.visibility = "hidden";
        document.getElementById("sideNav").style.animation = "fade-out 0.4s";
    }
}
function closeSideNav()
{
    document.getElementById("sideNav").style.visibility = "hidden";
    document.getElementById("sideNav").style.animation = "fade-out 0.4s";
}

// Script For SideNav Toggle Lines

function openCloseAnimation() 
{
    if(document.getElementById("bar2").style.opacity === "1" || document.getElementById("bar2").style.opacity === "") 
    {
        document.getElementById("bar1").style.transform = "rotate(-45deg) translate(-5px, 6px)";
        document.getElementById("bar2").style.opacity = "0";
        document.getElementById("bar3").style.transform = "rotate(45deg) translate(-6px, -8px)";
        document.getElementById("bar1").style.backgroundColor = "#086cec";
        document.getElementById("bar3").style.backgroundColor = "#086cec";
    }
    else
    {
        document.getElementById("bar1").style.transform = "rotate(0deg)";
        document.getElementById("bar2").style.opacity = "1";
        document.getElementById("bar3").style.transform = "rotate(0deg)";    
        document.getElementById("bar1").style.backgroundColor = "#000";
        document.getElementById("bar3").style.backgroundColor = "#000";
    }
}