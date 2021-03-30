// Script to run page content for project page
var page = window.location.search.substring(1);

// switch between pages, set content of each
switch(page) {
    case 'about':
        displayAbout();
        break;
    case 'work':
        displayWork();
        break;
    case 'contact':
        displayContact();
        break;
}

// display about page
function displayAbout() {
    $('#about').attr('style','color: gray');
    var newP = document.createElement('p');
    newP.innerHTML = "<h3>About Me</h3><br>I am a web developer currently attending the UNC Full Stack Web Development Bootcamp. I will graduate in July 2021. I am experienced in using HTML5, CSS3, Javascript, Bootstrap and jQuery to create sleek, dynamic and responsive websites. I have past experience with PHP, MySQL, Perl, and Java. <br><br>I developed a love for computers, programming and networking at a young age. I taught myself how to create websites and build servers. I started my first web development business at age 16, hosting websites in my garage using open source tools. This remained a hobby for many years while I pursued a career in public service. <br><Br>I am seeking a role where I can apply my current knowledge, learn new skills, interact with an amazing team, and build something great for our users. Communication skills, an unbreakable work ethic, and persevering under pressure are key skills I honed in my past career. I will bring these values with me to my next employer."

    $('#content-text').append(newP);
}

// display work page
function displayWork() {
    // highlight work in navbar
    $('#work').attr('style','color: gray');

    // set up projects variable (in future, this will be in DB or external CSV file)
    var projects = [];
    
    projects.push({name: 'Stock News', image: 'stock_news.png', descr: 'View current stock quote information and top news stories for a given company', repo: 'https://github.com/ntjohns1/Project1_Group10', depl: 'https://ntjohns1.github.io/Project1_Group10/'});
    projects.push({name: 'Weather App!', image: 'weather_app.png', descr: 'Search by city to see current weather and a five day forecast', repo: 'https://github.com/sg0703/06_Weather-App', depl: 'https://sg0703.github.io/06_Weather-App/'});
    projects.push({name: 'Workday Scheduler', image: 'workday.png', descr: 'Easily schedule your workday with this simple task manager!', repo: 'https://github.com/sg0703/05_Work-Day-Scheduler', depl: 'https://sg0703.github.io/05_Work-Day-Scheduler/'});
    
    // build card for each/insert into div 
    for (const project of projects) {
        $('#content-text').append(`<div class="col" style="width: 18rem;">
        <img class="card-img-top" src="Assets/images/${project.image}" alt="${project.descr}" style="width: 90%; height: auto">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.descr}</p>
          <a href="${project.repo}" class="btn btn-secondary">Repo</a>
          <a href="${project.depl}" class="btn btn-secondary">Deployed</a>
        </div>
      </div>`);
    } 
}

// display contact information
function displayContact() {
    $('#contact').attr('style','color: gray');
    var newP = document.createElement('p');
    newP.innerHTML = `<h3>Contact Me</h3><br><ul><li>Phone: 919-815-0639</li><li>Email: sam.j.gates@gmail.com</li><li><a href="https://www.linkedin.com/in/sam-gates-8413371b9/" style="color: black; text-decoration: none;">LinkedIn</a></li><li><a href="https://github.com/sg0703" style="color: black; text-decoration: none;">Github</a></li>`;

    $('#content-text').append(newP);
}