function openPerson(personId) {
    var i, content, personTabs, navButtons;
    content = document.getElementsByClassName("person-content");
    navButtons = document.querySelectorAll('nav ul li button');

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";  // Hide all person content divs
        navButtons[i].classList.remove('active');  // Remove active class from all buttons
    }

    // Display the selected person's content and automatically open their first project
    document.getElementById(personId).style.display = "block";  // Show the selected person's content
    var activeButton = document.querySelector(`button[onclick="openPerson('${personId}')"]`);
    activeButton.classList.add('active');  // Highlight the active person

}

function openProject(evt, projectName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Hide all tabs
        tablinks[i].classList.remove("active");  // Remove active class from all tab links
    }

    document.getElementById(projectName).style.display = "block";  // Show the selected tab
    if (evt) {
        evt.currentTarget.classList.add("active");  // Set the active class on the link
    } else {
        var autoActiveLink = document.querySelector(`button[onclick="openProject(event, '${projectName}')"]`);
        if (autoActiveLink) {
            autoActiveLink.classList.add('active');
        }
    }
}

// Initialize the first person as active on page load
document.addEventListener('DOMContentLoaded', function() {
    openPerson('TContent');  // Automatically open the first person's content
});
