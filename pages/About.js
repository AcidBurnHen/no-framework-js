class Home extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>about Page</h1>
            <p>Welcome to the about page</p>
        `
    }
}

customElements.define('about-page', Home)