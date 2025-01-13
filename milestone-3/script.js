"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeDisplayElement = document.getElementById('resume-display');
    if (!form || !resumeDisplayElement) {
        console.error('Form or Resume Display Element not found in the DOM!');
        return;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experiance').value;
        const skills = document.getElementById('skills').value;
        const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
  
        <h3>Education</h3>
        <p>${education}</p>
  
        <h3>Experience</h3>
        <p>${experience}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
        resumeDisplayElement.innerHTML = resumeHTML;
    });
});
