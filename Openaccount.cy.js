describe('Open account', () => {

    before('visit webpage amd login', () =>{
        cy.visit('https://parabank.parasoft.com/')
        cy.get("input[name='username']").type('user1')
        cy.get("input[name='password']").type('admin1')
        cy.get("input[value='Log In']").click()
})
    it('Open new account', () => {
        cy.get("a[href='openaccount.htm']").click()
        cy.get("#type").select(1)
        cy.get("#fromAccountId").select('16563')
        cy.get("input[value='Open New Account']").click()
    })
})