describe('todo list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have initially two tasks', () => {
    cy.get('.todo-list li').should('have.length', 5)
  })

  it('should have a length of 6', () => {
    cy.get('.new-todo').type('Node.js {enter}')
    cy.get('.todo-list li')
      .should('have.length', 6)
      .first()
      .should('have.text', 'Node.js')
  })

  it('should check the checkBox', () => {
    cy.get('.toggle').check()
    cy.get('ul div').should('have.class', 'completed')
  })

  it('should uncheck the checkBox', () => {
    cy.get('.toggle').uncheck()
    cy.get('ul div').should('not.have.class', 'completed')
  })

  it('should show incomplete tasks', () => {
    cy.get('.footer button').click()
    cy.get('.todo-list')
      .get('div')
      .first()
      .should('not.have.class', 'completed')
  })
})