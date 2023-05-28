import { $ } from "./utils.js";
// Datas
import { projectsData } from "./data.js";
import { skillsData } from "./data.js";

// Variables
const projectsEl = $('.projects');
const skillsEl = [...$(".skills").children];

// Functions
const loadNeededElements = (projectsEl, skillsEl) => {
    loadProjectsEl(projectsEl)
    loadSkillsEl(skillsEl)
}

const loadProjectsEl = projectsEl => {
    projectsData.forEach(project => {
        // Create Project Codes
        const html = `
            <div class="project">
            <img class="project-bg" src="../assets/img/${project.picture}" alt="current project background" loading="lazy">
                <div class="content">
                    <span>${project.tag}</span>
                    <h1 class="title">${project.name}</h1>
                    <a class="open-this-project" href=${project.link}><i class="bi bi-link-45deg"></i></a>
                </div>
            </div> `
        // Add Project to html
        projectsEl.insertAdjacentHTML("beforeend", html)
    });
}
const loadSkillsEl = skillsEl => {
    skillsData.forEach((sec, i) => {
        // Set Required ContentEl
        const contentEl = skillsEl[i].querySelector('.content');

        sec.forEach(skill => {
            // Create Project Codes
            const html = `
            <div class="skill">
            <i class="${skill.icon}"></i>
                <div class="text">
                    <h2 class="skill-name"><strong>${skill.title}</strong></h2>
                    <span>${skill.label}</span>
                </div>
            </div> `
            // Add Skill to html
            contentEl.insertAdjacentHTML("beforeend", html)
        })
    })
}
// Call
loadNeededElements(projectsEl, skillsEl)

// Update DOM
import { G_PROFILE } from "./data.js";
// Variables
const authorPictureEl = $('.author-pic img');
const imgShowEl = $('.img-show img');
const authorNameEl = $('.author-name strong');
const addressEl = $('address a')
const emAuthorNameEl = $('em .author-name')
const githubFollowersEl = $('#githubFollowers')

// Functions
const updateUI_G = () => {
    G_PROFILE().then(response => {
        console.log(response);
        // Update Profile Image
        authorPictureEl.src = response.avatar_url
        imgShowEl.src = response.avatar_url
        // Update Name and subname
        authorNameEl.textContent = response.name
        emAuthorNameEl.textContent = response.name
        // Update Location
        addressEl.textContent = response.location
        // Update Followers
        githubFollowersEl.textContent = response.followers
    })
}

updateUI_G()