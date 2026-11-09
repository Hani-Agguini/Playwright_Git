import { Page } from "@playwright/test"

export class ExplorerPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    ajoutAnnonce: () => this.page.getByRole("button",{name:"Ajouter une annonce"}),

}

async clickAjoutAnnonce() {
    await this.Elements.ajoutAnnonce().click()

}

}