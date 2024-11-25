describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains ('Sign In').click()
    cy.url().should('include', '/signin')
        cy.get('#email').type('isabelly@gmail.com')
        cy.get('#password').type('Isabelly')
        cy.get('[data-cy=botao-login]').click()
        cy.contains('Dashboard').click()
        cy.get('[data-cy=criacao]').click()
        cy.get('[data-cy=titulo]').click()
        cy.get('#title').type('teste')
        cy.get('[data-cy=descricao]').click()
        cy.get('#description').type('ola,estou testando vc')
        cy.get('#owner').select('Isabelly')
        cy.get('#project').select('Isa')
        cy.get('#storypoint').select('1')
        cy.get('[data-cy=id-seletor-prioridade]').select("Low")
        cy.get('#hoursEstimate').type('15')
        cy.get('[data-cy=criar]').click()



    })
})
    
 
