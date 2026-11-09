import { Page } from "@playwright/test"

export class LoginPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        email :      ()=> this.page.getByRole('textbox', { name: 'Email' }),
        motdepasse : ()=> this.page.getByRole('textbox', { name: 'Mot de passe' }),
        souvenirdemoi : ()=> this.page.getByRole('checkbox', { name: 'Souvien-toi de moi' }),
        seconnecter : ()=> this.page.getByRole('button', { name: 'Se connecter' }),
}

     async setEmail(u:string) {
        await this.Elements.email().fill(u)
    }

     async setmdps(p:string) {
        await this.Elements.motdepasse().fill(p)
    }

     async clickSouvienstoi() {
        await this.Elements.souvenirdemoi().click()
    }

     async clickseconnecter() {
        await this.Elements.seconnecter().click()
    }

}