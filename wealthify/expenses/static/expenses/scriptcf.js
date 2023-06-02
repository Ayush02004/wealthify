// Sample data for investment list
const investments = [
    { name: 'Artificial Intelligence (AI) and Machine Learning (ML)', description: 'AI and ML have been attracting significant investments in recent years. Startups in this space are leveraging AI and ML technologies to develop innovative solutions across various industries, such as healthcare, finance, e-commerce, and autonomous vehicles. The applications range from predictive analytics and natural language processing to computer vision and robotics.' },
    { name: 'Financial Technology (FinTech)', description: ' FinTech startups have been gaining momentum and attracting substantial investments. These startups aim to disrupt traditional financial services by leveraging technology and innovation. Examples include digital payment platforms, peer-to-peer lending, blockchain-based solutions, robo-advisors, and mobile banking applications. The increasing demand for convenient, secure, and efficient financial services has contributed to the growth of this sector.' },
    { name: 'Clean Energy and Sustainability', description: 'With the growing global focus on sustainability and the need to address climate change, startups in the clean energy and sustainability sector have garnered significant attention from investors. These startups are developing renewable energy solutions, energy-efficient technologies, waste management systems, sustainable agriculture practices, and other eco-friendly innovations. The transition towards a more sustainable and green economy has created ample opportunities for startups in this space.' }
];

  // Sample data for upcoming startups
const startups = [
    { name: 'Startup X', description: 'Startup X is launching soon with an innovative product.' },
    { name: 'Startup Y', description: 'Get early access to Startup Y and help shape its future.' },
    { name: 'Startup Z', description: 'Invest in the promising idea of Startup Z and support their vision.' }
];



  // Render investment list
const investmentList = document.getElementById('investment-list');
investments.forEach(investment => {
    const investmentItem = document.createElement('div');
    investmentItem.classList.add('investment-item');
    investmentItem.innerHTML = `
    <h3>${investment.name}</h3>
    <p>${investment.description}</p>
    `;
    investmentList.appendChild(investmentItem);
});

  // Render startup list
const startupList = document.getElementById('startup-list');
startups.forEach(startup => {
    const startupItem = document.createElement('div');
    startupItem.classList.add('startup-item');
    startupItem.innerHTML = `
    <h3>${startup.name}</h3>
    <p>${startup.description}</p>
    `;
    startupList.appendChild(startupItem);
});

// Sample data for discussion forum
let forumPosts = [
    { username: 'Archit Jain', content: 'I am looking for investment opportunities in the healthcare sector.' },
    { username: 'Ayush Gupta', content: 'Hey! I Believe in investing startups due to High Returns.Investing in startups offers the potential for significant returns on investment, with successful startups experiencing exponential growth and providing investors with substantial profits.' },
    { username: 'Vibhu Jain', content: 'Hi There ! I just love startup ecosystem , the reason behind it is Innovation and Disruption. Investing in startups allows individuals to be part of innovative and disruptive ventures that introduce groundbreaking ideas, technologies, and business models, potentially redefining entire industries.' }
];

  // Render discussion forum
const forum = document.getElementById('forum');
renderForumPosts();

function renderForumPosts() {
    forum.innerHTML = '';
    forumPosts.forEach(post => {
    const forumPost = document.createElement('div');
    forumPost.classList.add('forum-post');
    forumPost.innerHTML = `
        <div class="post-header">
        <span class="username">${post.username}</span>
        </div>
        <div class="post-content">${post.content}</div>
    `;
    forum.appendChild(forumPost);
    });
}

  // Add event listener to the comment form
const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const usernameInput = document.getElementById('username');
    const contentInput = document.getElementById('content');
    const username = usernameInput.value;
    const content = contentInput.value;

    // Create new post object
    const newPost = { username, content };

    // Add new post to the forumPosts array
    forumPosts.push(newPost);

    // Clear input fields
    usernameInput.value = '';
    contentInput.value = '';

    // Render the updated forum
    renderForumPosts();
});















//for web data
// Function to fetch and display startup data
async function fetchStartupData() {
    try {
      // Send an HTTP GET request to the website
    const response = await fetch('https://www.startupindia.gov.in/content/sih/en/search.html?industries=*&stages=RECOGNISED&sort=desc&page=1');
    const data = await response.text();

      // Load the HTML content into a DOM parser
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, 'text/html');

      // Find the container that holds the startup information
    const startupContainer = htmlDocument.querySelector('.startups-search-results');

      // Find all the startup cards
    const startupCards = startupContainer.querySelectorAll('.search-card-content');

      // Clear existing data
    const startupList = document.getElementById('startup-list');
    startupList.innerHTML = '';

      // Iterate over each startup card and extract the required information
    startupCards.forEach(card => {
        const name = card.querySelector('.title').textContent.trim();
        const description = card.querySelector('.description').textContent.trim();
        const date = card.querySelector('.status').textContent.trim();

         // Create HTML elements for startup information
        const listItem = document.createElement('li');
        listItem.className = 'startup-item';

        const nameElement = document.createElement('div');
        nameElement.className = 'startup-name';
        nameElement.textContent = name;

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'startup-description';
        descriptionElement.textContent = description;

        const dateElement = document.createElement('div');
        dateElement.className = 'startup-date';
        dateElement.textContent = 'Recognition Date: ' + date;

          // Append startup information to the list
        listItem.appendChild(nameElement);
        listItem.appendChild(descriptionElement);
        listItem.appendChild(dateElement);
        startupList.appendChild(listItem);
    });
    } catch (error) {
    console.error('Error:', error);
    }
}

  // Call the function to fetch startup data when the page loads
window.addEventListener('load', fetchStartupData);
