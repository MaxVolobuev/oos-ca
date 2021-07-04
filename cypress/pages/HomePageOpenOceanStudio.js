export class HomePageOpenOceanStudio {

    constructor(node) {
        this.node = node;
    }

    visit(env) {
        cy.visit(Cypress.env(env))
    }

    static typeIntoNameSearchField(val) {
        return cy.get('#name').type(val)
    }
    static typeIntoCitySearchField(val) {
        return cy.get('#city').type(val)
    }

    static nameSearchField() {
        return cy.get('#name')
    }

    static citySearchField() {
        return cy.get('#city')
    }

    static submitButton() {
       return  cy.get('[type="submit"]').click()
    }

    static clearButton() {
       return  cy.get('#filters > [type="button"]')
    }

    static lloydAppliedNextButton() {
        return cy.get(':nth-child(2) > .CrewMember-toolbar > .CrewMember-up')
    }

    static lloydInterviewNextButton() {
        return cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > .CrewMember-up')
    }

    static appliedResultsByName() {
        return cy.get('.App-container > :nth-child(1)').find('.CrewMemeber-name')
    }

    static interviewResultsByName() {
        return cy.get('.App-container > :nth-child(2)').find('.CrewMemeber-name')
    }

    static  hiredResultsByName() {
        return cy.get('.App-container > :nth-child(3)').find('.CrewMemeber-name')
    }

    static allColumns() {
        return cy.get('.App-container').find('.CrewMemeber-name')
    }

}