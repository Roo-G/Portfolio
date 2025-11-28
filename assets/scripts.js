fetch('config.json')
.then(response => response.json())
.then(data => {
const app = document.getElementById('app');


app.innerHTML = `
<h1>${data.name}</h1>
<h3>${data.title}</h3>
<p>${data.sections.About.description}</p> 


<div class="section">
<h2>Projects</h2>
${data.sections.Projects
.map(
p => `
<div class="project">
<strong>${p.name}</strong><br />
<span>${p.description}</span><br />
<a href="${p.link}" target="_blank">View Project</a>
</div>`
)
.join('')}
</div>


<div class="section">
<h2>CV</h2>
<a href="${data.sections.CV}" target="_blank">View My CV</a>
</div>
`;
});