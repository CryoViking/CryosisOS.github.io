const btn = document.querySelector(".btn-toggle");
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        var arrow = document.getElementById('who-are-we-arrow');
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-right-dark-mode";
        } else if (arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-right";
        } else if (arrow.className === "arrow-down"){
            arrow.className = "arrow-down-dark-mode";
        } else if (arrow.className === "arrow-down-dark-mode"){
            arrow.className = "arrow-down";
        }
        arrow = document.getElementById('who-am-i-arrow');
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-right-dark-mode";
        } else if (arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-right";
        } else if (arrow.className === "arrow-down"){
            arrow.className = "arrow-down-dark-mode";
        } else if (arrow.className === "arrow-down-dark-mode"){
            arrow.className = "arrow-down";
        }
        arrow = document.getElementById('experience-arrow');
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-right-dark-mode";
        } else if (arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-right";
        } else if (arrow.className === "arrow-down"){
            arrow.className = "arrow-down-dark-mode";
        } else if (arrow.className === "arrow-down-dark-mode") {
            arrow.className = "arrow-down";
        }
        arrow = document.getElementById('projects-arrow');
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-right-dark-mode";
        } else if (arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-right";
        } else if (arrow.className === "arrow-down"){
            arrow.className = "arrow-down-dark-mode";
        } else if (arrow.className === "arrow-down-dark-mode"){
            arrow.className = "arrow-down";
        }
        arrow = document.getElementById('our-communities-arrow');
        if(arrow.className === "arrow-right"){
            arrow.className = "arrow-right-dark-mode";
        } else if (arrow.className === "arrow-right-dark-mode"){
            arrow.className = "arrow-right";
        } else if (arrow.className === "arrow-down"){
            arrow.className = "arrow-down-dark-mode";
        } else if (arrow.className === "arrow-down-dark-mode"){
            arrow.className = "arrow-down";
        }
    }
);