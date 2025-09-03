import { Page , expect } from "@playwright/test";
import * as data from '../test-data/logindata.json';
import { DashboardPage } from "./dashbord_page";
import  logger  from "../utils/loggerUtil";

 export class forgotPassword {

    private readonly EmailInputLocater="#email";
    private readonly SendResetLinkButtonLocator="button,Send Reset Link"; 
    private readonly BackTologinButtonLocator="//a[@class='d-flex align-items-center justify-content-center']";
    private readonly WarningPopUpLocator="div[role='alert']";

    // Initialize the page object
    constructor(private page:Page){ }
 

    async enterEmail(email: string) {
        await this.page.locator(this.EmailInputLocater).fill(email);
        logger.info("Entered email in the email field");
    }

    async ClickOnTheSendResetLinkButton() {
        await this.page.click(this.SendResetLinkButtonLocator);
        logger.info("Send Reset Link Button is clicked");
    }

    async clickBackToLoginButton() {
        await this.page.locator(this.BackTologinButtonLocator).click();
        logger.info("Back to login button clicked");
    return new DashboardPage(this.page);
        
    }

    async WarningPopUp(){
         const errorMassage=await this.page.locator(this.WarningPopUpLocator)
         await expect(errorMassage).toBeVisible();
         logger.info("Warning pop up is visible")
    }

    async verifytheloginPageisDisplayed(){
        //const url=await this.page.waitForURL(data.baseURL.url);
        await expect(this.page).toHaveURL(data.baseURL.url);
    }


}