function toggleElement(element, arrow){
    if (element.style.display === "none") {
        element.style.display = "block";
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-down";
        } else if(arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-down-dark-mode";
        }
    } else {
        element.style.display = "none";
        if(arrow.className === "arrow-down"){
            arrow.className = "arrow-right";
        } else if(arrow.className === "arrow-down-dark-mode") {
            arrow.className = "arrow-right-dark-mode";
        }
    }
}


$(function(){
    $("#content-header-who-are-we").click(function(e){
        var element = document.getElementById("content-who-are-we");
        var arrow = document.getElementById('who-are-we-arrow');
        toggleElement(element, arrow);
    });

    $("#who-are-we-arrow").click(function(e){
        var element = document.getElementById("content-who-are-we");
        var arrow = document.getElementById('who-are-we-arrow');
        toggleElement(element, arrow);
    });

    $("#content-header-who-am-i").click(function(e){
        var element = document.getElementById("content-who-am-i");
        var arrow = document.getElementById('who-am-i-arrow');
        toggleElement(element, arrow);
    });

    $("#who-am-i-arrow").click(function(e){
        var element = document.getElementById("content-who-am-i");
        var arrow = document.getElementById('who-am-i-arrow');
        toggleElement(element, arrow);
    });

    $("#content-header-experience").click(function(e){
        var element = document.getElementById("content-experience");
        var arrow = document.getElementById('experience-arrow');
        toggleElement(element, arrow);
    });

    $("#experience-arrow").click(function(e){
        var element = document.getElementById("content-experience");
        var arrow = document.getElementById('experience-arrow');
        toggleElement(element, arrow);
    });

    $("#content-header-projects").click(function(e){
        var element = document.getElementById("content-projects");
        var arrow = document.getElementById('projects-arrow');
        toggleElement(element, arrow);
    });

    $("#projects-arrow").click(function(e){
        var element = document.getElementById("content-projects");
        var arrow = document.getElementById('projects-arrow');
        toggleElement(element, arrow);
    });

    $("#content-header-our-communities").click(function(e){
        var element = document.getElementById("content-our-communities");
        var arrow = document.getElementById('our-communities-arrow');
        toggleElement(element, arrow);
    });

    $("#our-communities-arrow").click(function(e){
        var element = document.getElementById("content-our-communities");
        var arrow = document.getElementById('our-communities-arrow');
        toggleElement(element, arrow);
    });
});