describe('Bill Payment', () =>{

    before('visit webpage amd login', () =>{
        cy.visit('https://parabank.parasoft.com/')
        cy.get("input[name='username']").type('user1')
        cy.get("input[name='password']").type('admin1')
        cy.get("input[value='Log In']").click()
})
    it('Bill payment functionality test'), () =>{
        cy.get("a[href='billpay.htm']").click()
        cy.get("input[name='payee.name']").type('test')
        cy.get("input[name='payee.address.street']").type('test')
        cy.get("input[name='payee.address.city']").type('test')
        cy.get("input[name='payee.address.state']").type('test')
        cy.get("input[name='payee.address.zipCode']").type('000000')
        cy.get("input[id='5858251d-38b9-47eb-bda5-1ac8c0cd21b9']").type('000987')
        cy.get("input[name='verifyAccount']").type('000987')
        cy.get("input[name='amount']").type('50')
        cy.get("select[name='fromAccountId']").select('16563')
        cy.get("input[value='Send Payment']").click()
    }
})