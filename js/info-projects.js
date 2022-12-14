(function(){
    const $projects = document.querySelector(".project-container");
    const $project = document.querySelectorAll(".project-div");
    const $projectFather = document.querySelector(".projects")

    const $projectInfo = document.querySelectorAll(".project-info");
    const $title = document.querySelectorAll(".title-project");
    const $projectImage = document.querySelectorAll(".project-image");
    
    const $selectionbuttons = document.querySelector(".selection-buttons");

    var ariaHidden = true;

    (function javaScriptEnable(){    
        $projectFather.classList.remove("projects-noJs");
        $selectionbuttons.classList.add("selectionButtons-js");
        for(var i = 0; i < $project.length && $project[i].classList.contains("complete"); i++){
            $projectInfo[i].classList.add("projectInfo-close");
            $title[i].classList.add("titleAct-close");
            $projectImage[i].classList.add("projectImage-close");
            
            $projectInfo[i].setAttribute("aria-hidden", ariaHidden);
        }
    })()
    

    function projectInfoHide(currentLength){
            ariaHidden = $projectInfo[currentLength].getAttribute("aria-hidden") === "true";
            $projectInfo[currentLength].setAttribute("aria-hidden", !ariaHidden);

            $projectInfo[currentLength].classList.toggle("projectInfo-close");
            $title[currentLength].classList.toggle("titleAct-close");
            $projectImage[currentLength].classList.toggle("projectImage-close");
    }

    //PROJECT DIV CLICK//
    $projects.addEventListener("click", function(e) {
        if(e.target.classList.contains('complete')){
            e.preventDefault;
            var currentLength = Array.prototype.indexOf.call($project, e.target);
            e.target = projectInfoHide(currentLength);
        }
    })
})();