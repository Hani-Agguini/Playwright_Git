import { expect,test } from "@playwright/test";

import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { ExplorerPage } from "../Pages/ExplorerPage";
import { AnnoncePage } from "../Pages/AnnoncePage";


let Lp: LandingPage
let LoP : LoginPage
let Ep: ExplorerPage
let Ap: AnnoncePage

test.beforeEach(async ({page}) => {
    Lp = new LandingPage(page)
    LoP = new LoginPage(page)
    Ep = new ExplorerPage(page)
    Ap = new AnnoncePage(page)
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

})

test('Ajouter une annonce valide ',async ({page}) => {
    
    // verfier que je suis sur la page d'acceuil
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")

    // cliquer sur le bouton ajouter une annonce
    await Ep.clickAjoutAnnonce()

    // verfier que je suis sur la page d'ajout d'annonce
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/annonces/new")

    // verifier couleur de l'etape 1


    expect(await Ap.getcouleurcircle1()).toBe("rgb(21, 101, 192)")
    // ajout de photo 
    await Ap.Ajoutphoto("./Asset/1.png")

    // cliquer sur le bouton suivant
    await Ap.clickSuivant()
    
    // expect etape 2 de devenir bleu 
    //const color = await Ap.getcouleurcircle2()
    //expect (color).toBe("rgb(21, 101, 192)")


    await Ap.setTitre("test")
    await Ap.setDescription("test")
    await Ap.clickSuivant()

    await Ap.setLargeur("3")
    await Ap.setLongueur("3")
    await Ap.setMotorisation("33")
    await Ap.setConsommation("33")
    await Ap.clickSuivant()


})
