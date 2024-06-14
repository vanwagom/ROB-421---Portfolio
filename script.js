document.addEventListener("DOMContentLoaded", function() {
    // Open the Team tab
    openPerson('TContent');

    // Open the About The Class project tab
    setTimeout(function() {
        var aboutTheClassTab = document.querySelector('#TContent .tab button[onclick*="aboutTheClass"]');
        if (aboutTheClassTab) {
            aboutTheClassTab.click();
        }
    }, 100); // Delay to ensure the elements are fully loaded
});

function openPerson(personName) {
    // Hide all person-content elements
    var personContent = document.getElementsByClassName("person-content");
    for (var i = 0; i < personContent.length; i++) {
        personContent[i].style.display = "none";
    }

    // Remove active class from all buttons
    var navButtons = document.querySelectorAll("nav ul li button");
    navButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Show the selected person-content element
    var selectedPerson = document.getElementById(personName);
    if (selectedPerson) {
        selectedPerson.style.display = "block";
    }

    // Add active class to the selected button
    var selectedButton = document.querySelector(`nav ul li button[onclick="openPerson('${personName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add("active");
    }

    // Automatically activate the "About Me" tab for the selected person
    setTimeout(function() {
        var aboutMeTab = selectedPerson.querySelector(".tab button.tablinks:first-child");
        if (aboutMeTab) {
            aboutMeTab.click();
        }
    }, 100); // Delay to ensure the elements are fully loaded
}

function openProject(evt, projectName) {
    // Hide all tabcontent elements
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tabcontent element
    var selectedProject = document.getElementById(projectName);
    if (selectedProject) {
        selectedProject.style.display = "block";
    }

    // Add active class to the clicked tablink
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}
