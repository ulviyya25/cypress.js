describe('автотесты на форму логина', function () {
    
    it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Авторизация прошла успешно')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
   })

it('востановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ulyagar@yandex.ru');
       cy.get('#forgotEmailButton').click();
       cy.get('#forgotForm > .header').should('be.visible')
       cy.get('#mailForgot').type('ulyagar@yandex.ru')
       cy.get('#restoreEmailButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
   })

it('неверный пароль и верный логин', function () {
     cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
cy.get('#pass').type('iLoveqastu');
cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Такого логина или пароля нет')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
       })

it('неверный логин и верный пароль', function () {
     cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.r');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
       })


it(' логин без "@" и верный пароль', function () {
     cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
       })


it(' логин со строчными буквами и верный пароль', function () {
     cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible')
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')

       })
});
