document.addEventListener("DOMContentLoaded", function() {
    console.log("Profile page loaded!");
    
    // Example: Add a new project dynamically
    let projectList = document.getElementById("project-list");
    let newProject = document.createElement("li");
    newProject.innerHTML = '<a href="https://github.com/hasan-mehedii">My New Project</a>';
    projectList.appendChild(newProject);
    
    // Add animation when a project is added
    newProject.classList.add('fade-in');
});
