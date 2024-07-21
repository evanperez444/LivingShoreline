function loadPage(page) {
    let content = document.getElementById('content');
    let homeTab = document.getElementById('home-tab');
    let workTab = document.getElementById('work-tab');
    let resourcesTab = document.getElementById('resources-tab');

    // Reset active class
    homeTab.classList.remove('active');
    workTab.classList.remove('active');
    resourcesTab.classList.remove('active');

    if (page === 'home') {
        content.innerHTML = `
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content of the Home page.</p>
        `;
        homeTab.classList.add('active');
    } else if (page === 'work') {
        content.innerHTML = `
            <h1>Previous Work</h1>
            <p>This is the main content of the Previous Work page.</p>
        `;
        workTab.classList.add('active');
    } else if (page === 'resources') {
        content.innerHTML = `
            <h1>Resources</h1>
            <p>This is the main content of the Resources page.</p>
        `;
        resourcesTab.classList.add('active');
    }
}
