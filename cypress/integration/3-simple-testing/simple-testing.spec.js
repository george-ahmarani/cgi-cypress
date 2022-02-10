describe('Accept cookies when getting the cgi website ', () => {
    beforeEach(() => {
        cy.visit('https://bonigarcia.dev/selenium-webdriver-java/')
      })
    it('Navigating', () => {
        cy.get('[href="navigation1.html"]').click()
        cy.get(':nth-child(3) > .page-link').click()
        cy.get('.col-12 > a').click()
        cy.get('.lead').contains("site")
    })

    it('Navigating as a chain', () => {
        cy.get('[href="navigation1.html"]')
        .click()
        .get(':nth-child(3) > .page-link')
        .click()
        .get('.col-12 > a')
        .click()
    })

    it('Go to web form and fill all inputs', () => {
        cy.get('[href="web-form.html"]').click()
        cy.get('#my-text-id').type("test")
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("password")
        cy.get('.btn').click()
    })
});