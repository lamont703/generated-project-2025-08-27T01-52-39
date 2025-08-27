// Fetch dummy data
fetch('assets/dummy-data.json')
    .then(response => response.json())
    .then(data => {
        // Populate project details
        const projectDetails = document.getElementById('project-details');
        projectDetails.innerHTML = `<h2>${data.project.title}</h2><p>${data.project.description}</p>`;

        // Populate GitHub info
        const githubInfo = document.getElementById('github-info');
        githubInfo.innerHTML = `<p>Repository: <a href="${data.github.repo}" target="_blank">${data.github.repo}</a></p><p>Page: <a href="${data.github.page}" target="_blank">${data.github.page}</a></p>`;
    });