class NotFound extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Not found</h1>
            <p>Welcome to the not found page</p>
        `
    }
}

customElements.define('not-found', NotFound)