describe('Test End to End', function() {
    it('Procurando um commit', function() {
        cy.visit('http://localhost:3000');
        cy.focused().type("brunier{enter}")
    });

    it('Ordenando para o mais antigo', function() {
        cy.get('[data-cy=filter]').select('Mais antigo')
        cy.wait(1000)
        cy.get('[data-cy=repo-title]').first().should(($msg) => {
            expect($msg).to.contain('Desafio-Reamp-Kibana');
        }).click();
    });

    it('Procurando um termo que não tem em nenhum commit', function() {
        cy.focused().type("Git init{enter}");
        cy.wait(500)
        cy.get('[data-cy=search-error]').should(($msg) => {
            expect($msg).to.contain('Infelizmente a API não conseguiu achar nenhum commit com esse termo');
        })
    });

    it('Voltando para a pagina de repos e selecionando outro repositorio (que tem que estar com repositorios atualizados)', function() {
        cy.get('[data-cy=button]').first().click()
        cy.wait(500)
        cy.get('[data-cy=repo]').first().click();
        cy.focused().type("Git init{enter}");
        cy.get('[data-cy=commit]').first().get("[data-cy=commit-msg]").should(($msg) => {
            expect($msg).to.contain('Git init');
        })
    });

    it('Procurando um commit e voltando para todos os commits', function() {
        cy.wait(500)
        cy.get('[data-cy=search-input]').first().clear().type("{enter}")
        cy.get('[data-cy=commit]').should(($commit) => {
            expect($commit).to.have.length.above(1);
        })
    });

    it('Voltando para a pagina de repos', function() {
        cy.get('[data-cy=button]').click()
        cy.get('[data-cy=repo]').should(($repo) => {
            expect($repo).to.have.length.above(1);
        })
    });
    it('Voltando para a pagina de busca de usuário', function() {
        cy.get('[data-cy=button]').click()
        cy.get('[data-cy=search-input').should(($input) => {
            expect($input).to.have.length(1);
        })
    })
});
