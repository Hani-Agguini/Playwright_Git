import { expect,test } from "@playwright/test";

import { LandingPage } from "../Pages/LandingPage";
import { RegisterPage } from "../Pages/RegisterPage";

let Lp: LandingPage

let Rp: RegisterPage

test('inscription valide ',async ({page}) => {
    Lp = new LandingPage(page)
    Rp = new RegisterPage(page)

    page.goto("https://app.thrundrz.com/")
    
    // verifier que je suis sur la page d'acceuil"https://app.thrundrz.com/"
    await expect(page).toHaveURL("https://app.thrundrz.com/")

    // cliquer sur le bouton inscrire
    await Lp.clickinscrire()
    
    // verfier que je suis sur la page d'inscription

    await expect(page).toHaveURL("https://app.thrundrz.com/newcompte")
    // remplir les champs
    await Rp.setNom("hani")
    // random email
    let tmp = Math.floor(Math.random() * 10000)
    await Rp.setEmail("hani"+tmp+"@gmail.com")
    await Rp.setMotDePasse("hani22")
    await Rp.setConfirmerMotDePasse("hani22")

    // cocher la case souvien toi de moi
    await Rp.clickSouvienstoi()

    // cliquer sur le bouton inscrire
    await Rp.clickcreerCompte()

    // verifier que le compte a ete cree
    await expect(Rp.getAlertSucessText()).toBeVisible()

    // verifier que je suis sur la page d'acceuil"https://app.thrundrz.com/"
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")

    

})