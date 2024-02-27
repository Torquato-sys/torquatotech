/*========================= toggle icon navbar ========================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.github.com/users/Torquato-sys';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Manipular os dados recebidos e exibi-los no HTML
            const profileImage = document.getElementById('profile-image');
            profileImage.src = data.avatar_url;


            const profileName = document.getElementById('profile-name');
            profileName.textContent = data.name;

            const profileLogin = document.getElementById('profile-login');
            profileLogin.textContent = data.login;

            const profileLocation = document.getElementById('profile-location');
            profileLocation.textContent = data.location;

            const profileBio = document.getElementById('profile-bio');
            profileBio.textContent = data.bio;

            const profileRepos = document.getElementById('profile-repos');
            profileRepos.innerHTML = `<p>Public Repos: <a href="https://github.com/Torquato-sys?tab=repositories" target="_blank" style="color: #40ff00;">${data.public_repos}</a></p>`;
                })
        .catch(error => console.error('Erro ao obter dados do perfil do GitHub:', error));
});




// URL da API do GitHub para obter os repositórios
const githubAPIUrl = 'https://api.github.com/users/Torquato-sys/repos';

// Função para buscar os repositórios na API do GitHub
async function getGithubRepos() {
    try {
        const response = await fetch(githubAPIUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os repositórios:', error);
    }
}

// Função para exibir os repositórios na página
async function displayGithubRepos() {
    const repos = await getGithubRepos();
    const reposSection = document.querySelector('.github-repos');

    repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');

        const repoName = document.createElement('h3');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description;

        const repoLanguage = document.createElement('p');
        repoLanguage.textContent = `Language: ${repo.language}`;
        repoLanguage.classList.add('highlight');

        const repoLink = document.createElement('a');
        repoLink.textContent = 'Ver no GitHub';
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';

        repoCard.appendChild(repoName);
        repoCard.appendChild(repoDescription);
        repoCard.appendChild(repoLanguage);
        repoCard.appendChild(repoLink);

        reposSection.appendChild(repoCard);
    });
}

// Chamando a função para exibir os repositórios ao carregar a página
window.onload = displayGithubRepos;
