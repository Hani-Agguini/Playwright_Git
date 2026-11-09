import { Page } from "@playwright/test"

export class AnnoncePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    photo: () => this.page.locator("#photo-input-0"),
}

async clickphoto() {
    await this.Elements.photo().setInputFiles("../Asset/1.png");

}

}