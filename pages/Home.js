class Home extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Home Page</h1>
            <p>Welcome to the home page</p>
        `
    }
}

customElements.define('home-page', Home)