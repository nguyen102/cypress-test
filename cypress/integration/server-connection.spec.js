describe('Example connection test', () => {

    it('Google DNS server', () => {
        const ipAddress = '8.8.8.8';
        const port = '443';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "true")
    })
    it('Invalid Ip Address connection', () => {
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

    it('expect this test to fail', () => {
        const ipAddress = '1.1.1.1';
        const port = '80';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "true")
    })



})
