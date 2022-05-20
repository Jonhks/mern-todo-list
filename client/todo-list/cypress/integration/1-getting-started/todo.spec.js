

describe('Note app', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('frontPage can be opened', () => {
    cy.contains('Todo list')
  })
  
  it('user can add todo', () => {
    const noteContent = "a note created by cypress"
    cy.get('[placeholder = "Add Todo Item"]').type(noteContent)
    cy.get('#form-add-buttom').click()
      .should('contain', 'Add')
      .should('have.css', 'background-color', 'rgb(0, 128, 128)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains(noteContent)
  })
   
  describe('and a note exist', () =>{
    it('can be made edit and delete', () => {
      cy.contains('a note created by cypress')
      cy.contains('Update')
      cy.contains('Delete')
    })
  })
  describe('Edit note', () => { 
    it('user can edit todo', () =>{
      cy.contains('a note created by cypress')
      cy.get('#edit-todo-buttom')
      .should('have.css', 'background-color', 'rgb(218, 165, 32)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      cy.get('#edit-todo-buttom').click()
      cy.get('#update-item').type('Item modificado')
      cy.get('#btn-update-item')
      .should('contain', 'Update')
      .should('have.css', 'background-color', 'rgb(153, 50, 204)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      cy.get('#btn-update-item').click()
    })
  })
  describe('Delete note', () => { 
    it('user can delet todo', () =>{
      cy.contains('Item modificado')
      cy.get('#delete-todo-buttom').last().click()
        .should('contain', 'Delete')
        .should('have.css', 'background-color', 'rgb(255, 0, 0)')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
    })
   })
})


