describe('Transfer', () =>{

         before('visit webpage amd login', () =>{
         cy.visit('https://parabank.parasoft.com/')
         cy.get("input[name='username']").type('user1')
         cy.get("input[name='password']").type('admin1')
         cy.get("input[value='Log In']").click()
})
    it('Transfer between accounts', () => {
        cy.get("a[href='transfer.htm']").click()
        cy.get("#amount").type('50')
        cy.get("#fromAccountId").select('16563')
        cy.get("#toAccountId").select('16674')
        cy.get("input[value='Transfer']").click()
    })
})