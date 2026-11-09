import { Page } from "@playwright/test"

export class LandingPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    //inscrire: () => this.page.getByRole("span",).nth(0),

}

}