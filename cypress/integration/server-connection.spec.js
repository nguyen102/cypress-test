describe('Example connection test', () => {

    it('Invalid Ip Address connection', () => {
        cy.visit('https://example.cypress.io/todo')
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('.todo-list li').should('have.length', 2)

        // We can go even further and check that the default todos each contain
        // the correct text. We use the `first` and `last` functions
        // to get just the first and last matched elements individually,
        // and then perform an assertion with `should`.
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
        const ipAddress = '1.1.1.1';
        const port = '22';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "false")
    })

    it('SSH connection', () => {
        const ipAddress = '54.218.89.92';
        const port = '22';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "true")
    })

    it('Window connection', () => {
        //Windows
        const ipAddress = 'ec2-18-135-96-173.eu-west-2.compute.amazonaws.com'
        const port = '3389';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "true")
    })



})
