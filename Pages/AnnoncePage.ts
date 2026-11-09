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
    titre: () => this.page.locator("#titre"),
    description: () => this.page.locator("#description"),
    longueur: () => this.page.locator("#longueur"),
    largeur: () => this.page.locator("#largeur"),
    consomation: () => this.page.locator("#consommation"),
    motorisation: () => this.page.locator("#motorisation"),

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
async setTitre(s : string) {
    await this.Elements.titre().fill(s);
}
async setDescription(s : string) {
    await this.Elements.description().fill(s);
}

async setLongueur(s : string) {
    await this.Elements.longueur().fill(s);
}
async setLargeur(s : string) {
    await this.Elements.largeur().fill(s);
}
async setConsommation(s : string) {
    await this.Elements.consomation().fill(s);
}
async setMotorisation(s : string) {
    await this.Elements.motorisation().fill(s);
}

}