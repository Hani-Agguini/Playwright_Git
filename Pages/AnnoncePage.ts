import { Page } from "@playwright/test"

export class AnnoncePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    photo: () => this.page.locator("#photo-input-0"),
    suivant: () => this.page.locator("#btn-next-step"),
    step1: () => this.page.locator("#step-circle-1"),
    step2: () => this.page.locator("#step-circle-2"),

}

async Ajoutphoto(s : string) {
    await this.Elements.photo().setInputFiles(s);

}

async clickSuivant() {
    await this.Elements.suivant().click();

}

async getcouleurcircle1(): Promise<string> {
    return await this.Elements.step1().evaluate((el) => window.getComputedStyle(el).backgroundColor);

}
async getcouleurcircle2(): Promise<string> {
    return await this.Elements.step2().evaluate((el) => window.getComputedStyle(el).backgroundColor);

}

}