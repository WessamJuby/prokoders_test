/// <reference types="Cypress" />

describe("Operations Requested", () => {
    it('sorts languages by name in ascending order', () => {
        cy.request('/api/v1/languages?sort=name&order=asc')
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
    
            for (let i = 0; i < response.body.length - 1; i++) {
              expect(response.body[i].name < response.body[i + 1].name).to.be.true
            }
          });
      });

      it('sorts languages by name in descending order', () => {
        cy.request('/api/v1/languages?sort=name&order=desc')
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
    
            for (let i = 0; i < response.body.length - 1; i++) {
              expect(response.body[i].name > response.body[i + 1].name).to.be.true
            }
          });
      });


      it('get one language by id', () => {
        cy.request('/api/v1/languages/1')
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('object');
            expect(response.body.id).equal(1)
            expect(response.body.name).equal("English")
          });
      });

      
      it('get languages with limit {10}', () => {
        cy.request('/api/v1/languages?limit=10')
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).equal(10);

          });
      });
        
      it('search for language by name {English}', ()=>{
        cy.request('/api/v1/languages?search=English')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
          expect(response.body[0].name).equal("English");
        });
      })
})



