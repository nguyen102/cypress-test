describe('AppStream enabled tests', () => {
    it('Invalid Ip Address connection', () => {
        const ipAddress = '1.1.1.1';
        const port = '22';
        cy.exec(`node checkConnection.js ${ipAddress} ${port}`).its('stdout').should('equal', "false")
    })

    it('Expect this test to fail', () =>{
        expect(true).equal(false);
    })
})
