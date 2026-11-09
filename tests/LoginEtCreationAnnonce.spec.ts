import { expect,test } from "@playwright/test";

import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { ExplorerPage } from "../Pages/ExplorerPage";


let Lp: LandingPage
let LoP : LoginPage
let Ep: ExplorerPage

test('Ajouter une annonce valide ',async ({page}) => {

    Lp = new LandingPage(page)
    LoP = new LoginPage(page)
    Ep = new ExplorerPage(page)

    page.goto("https://app.thrundrz.com/")
    
    // verifier que je suis sur la page d'acceuil"https://app.thrundrz.com/"
    await expect(page).toHaveURL("https://app.thrundrz.com/")

    // cliquer sur le bouton login
    await Lp.Clickseconnecter()   

    // verfier que je suis sur la page de login
    await expect(page).toHaveURL("https://app.thrundrz.com/login")

    // remplir mail et password

    await LoP.setEmail("amine@gmail.com")
    await LoP.setmdps("abcdef12")

    // cocher la case remember me
    //await LoP.clickSouvienstoi()
    
    // cliquer sur le bouton login

    await LoP.clickseconnecter()

    
    // verfier que je suis sur la page d'acceuil
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")

    // cliquer sur le bouton ajouter une annonce
    await Ep.clickAjoutAnnonce()

    // verfier que je suis sur la page d'ajout d'annonce
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/annonces/new")
    

    

})

