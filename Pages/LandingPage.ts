import { Page } from "@playwright/test"

export class LandingPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    inscrire: () => this.page.getByRole("paragraph").nth(0),
    seconnecter : ()=> this.page.getByRole('link', { name: 'Se connecter' }),
}

async clickinscrire() {
    await this.Elements.inscrire().click()
}

async Clickseconnecter(){
    await this.Elements.seconnecter().click
}


}