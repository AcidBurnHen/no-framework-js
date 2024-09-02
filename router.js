// --------------- ROUTER ---------------
// Only loading modules in as they are needed, and returning the appropriate component names.
const routes = {
    '/not-found': () => {
        import('./pages/NotFound.js')
        return 'not-found'
    },
    '/': () => {
        import('./pages/Home.js')
        return 'home-page'
    },
    '/about': () => {
        import('./pages/About.js')
        return 'about-page'
    }
}

// Render the appropriate page to the root element
function renderPage(path) {
    const rootElement = document.getElementById('root')
    if (!Object.keys(routes).includes(path)) {
        path = 'not-found'
    }
    const componentLoader = routes[path]
    const componentName = componentLoader()
    rootElement.innerHTML = ''
    const component = document.createElement(componentName)

    rootElement.appendChild(component)
}

// Handle navigation
function handleNavigation(event) {
    event.preventDefault()
    console.log("Handling navigation: ", event.target)

    const path = event.target.getAttribute('data-route')
    history.pushState(null, '', path)
    renderPage(path)
}


// Experimenting with events 
window.addEventListener('popstate', () => {
    console.log("\"popstate\" listener ran")
    renderPage(window.location.pathname)
})

document.querySelectorAll('a[data-route]').forEach(link => {
    link.addEventListener('click', handleNavigation)
})

window.addEventListener('navigate', (event) => {
    console.log("\"navigate\" listener ran")
    renderPage(window.location.pathname)
})

renderPage(window.location.pathname)
console.log("Rendering path: ", window.location.pathname)

window.addEventListener('load', (event) => {
    console.log("\"load\" event ran")
    renderPage(window.location.pathname)
})