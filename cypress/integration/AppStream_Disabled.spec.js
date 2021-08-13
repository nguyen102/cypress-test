describe('AppStream disabled tests', () => {

    it('Google DNS server', () => {
        const ipAddress = '8.8.8.8';
        const port = '443';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "true")
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
