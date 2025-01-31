describe('Login', () => {
    before('Visit webpage first', () =>{
        cy.visit('https://parabank.parasoft.com/')
})
    it('Login functionality test', () => {
        cy.get("input[name='username']").type('user1')
        cy.get("input[name='password']").type('admin1')
        cy.get("input[value='Log In']").click()
    })
})