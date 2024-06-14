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
    document.getElementById(personName).style.display = "block";

    // Add active class to the selected button
    var selectedButton = document.querySelector(`nav ul li button[onclick="openPerson('${personName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add("active");
    }

    // Automatically activate the "About Me" tab for the selected person
    var aboutMeTab = document.querySelector(`#${personName} .tab button.tablinks:first-child`);
    if (aboutMeTab) {
        aboutMeTab.click();
    }
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
    document.getElementById(projectName).style.display = "block";

    // Add active class to the clicked tablink
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Open the Team tab
    openPerson('TContent');
    
    // Open the Pupper Race project tab
    var pupperRaceTab = document.querySelector('#TContent .tab button[onclick*="pupperRace"]');
    if (pupperRaceTab) {
        pupperRaceTab.click();
    }
});


// Initialize the first person as active on page load
document.addEventListener("DOMContentLoaded", function() {
    // Open the Team tab
    openPerson('TContent');
    
    // Open the Pupper Race project tab
    document.querySelector('#TContent .tab button.tablinks.active').click();
});
