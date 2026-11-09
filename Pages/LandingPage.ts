import { Page } from "@playwright/test"

export class LandingPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    inscrire: () => this.page.getByRole("paragraph").nth(0),

}

async clickinscrire() {
    await this.Elements.inscrire().click()

}


}