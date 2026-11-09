import { Page } from "@playwright/test"

export class RegisterPage {

    readonly page: Page;

    constructor(p: Page) {

        this.page = p;
    }

    // définir les locators de la page login 

    elements = {
        Nom: () => this.page.getByRole('textbox', { name: 'Votre nom complet' }),
        Email: () => this.page.getByRole('textbox', { name: 'votre@email.com' }),
        MotDePasse: () => this.page.getByRole('textbox', { name: '********' }).nth(0),
        confirmerMotDePasse: () => this.page.getByRole('textbox', { name: '********' }).nth(1),
        creerCompte: () => this.page.getByRole('button', { name: 'Créer un compte' }),
        alertSucess: () => this.page.locator('[role="alert"]'),
        souvienstoi: () => this.page.getByRole('checkbox', { name: 'Souviens-toi de moi' })
    }

    async clickcreerCompte() {

        await this.elements.creerCompte().click()

    }

    async setNom(n: string) {

        await this.elements.Nom().fill(n)

    }

    async setEmail(e: string) {

        await this.elements.Email().fill(e)

    }

    async setMotDePasse(m: string) {

        await this.elements.MotDePasse().fill(m)

    }

    async setConfirmerMotDePasse(c: string) {

        await this.elements.confirmerMotDePasse().fill(c)
    
    }

    async clickSouvienstoi() {

        await this.elements.souvienstoi().click()
    
    }

    getAlertSucessText(){

        return this.elements.alertSucess()
    }

}