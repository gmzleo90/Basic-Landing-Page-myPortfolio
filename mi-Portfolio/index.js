
const GITHUB_URL = 'http://www.github.com/gmzleo90';
const LINKEDIN_URL = 'http://www.linkedin.com/in/gmzleo90';
const TRAILHEAD_URL = 'https://trailblazer.me/id/gmzleo90'
const myGithubElement = document.getElementById('github');
const myLinkedinElement = document.getElementById('linkedin');
const myTrailheadElement = document.getElementById('trailhead');


//Listeners
myGithubElement.addEventListener('click', () => goTo(GITHUB_URL));
myLinkedinElement.addEventListener('click', () => goTo(LINKEDIN_URL));
myTrailheadElement.addEventListener('click', () => goTo(TRAILHEAD_URL));


//function goTo url
function goTo(url) {
    window.location.href = url;
}