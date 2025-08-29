import { Page , expect } from "@playwright/test";
import * as data from '../test-data/logindata.json';
import { DashboardPage } from "./dashbord_page";
import  logger  from "../utils/loggerUtil";

 export class loginPage {
     static
         // Initialize the page object
         loginToApplication(email: string, password: string) {
             throw new Error('Method not implemented.');
     }
     static navigateToLoginPage(loginURL: any) {
         throw new Error('Method not implemented.');
     }

    private readonly EmailInputLocater="#email";
    private readonly PasswordInputLocator="#password"; ;
    private readonly loginButtonLocator="//button[text()='Log in']";
    private readonly ForgotPasswordLinkLocator ="//a/small[text()='Forgot Password?']";

    // Initialize the page object
    constructor(private page:Page){ }
 

    async enterEmail(email: string) {
        await this.page.locator(this.EmailInputLocater).fill(email);
        logger.info("Entered email in the email field");
    }

    async enterPassword(password: string) {
        await this.page.locator(this.PasswordInputLocator).fill(password);
        logger.info("Entered password in the password field");
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButtonLocator).click();
        logger.info("Clicked on the login button");

        const dashboardPage = new DashboardPage(this.page);
    return dashboardPage;
        
    }

    async clickForgotPassword() {
        await this.page.locator(this.ForgotPasswordLinkLocator).click();
        logger.info("Clicked on the 'Forgot Password?' link");
    }

    //for quick login
    async loginToApplication(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Verify successful login by checking the URL or dashboard title
    async verifyLoginSuccess() {
        await this.page.waitForURL(data.baseURL.dashboardURL);    
        const dashboardTitle = await this.page.title();
        expect(dashboardTitle).toContain('Dashboard');      // Adjust the expected title as needed  
        logger.info("Login successful, Dashboard page is displayed");
    }

    // Verify error message is displayed
    async LoginFailureErrorMassageDisplayed() {
        const errorMessage = this.page.locator("div[role='alert']");
        await expect(errorMessage).toBeVisible();               
        await expect(errorMessage).toHaveText('× Incorrect email or password.'); // Adjust the expected error message as needed
        logger.info("Login failed, error message is displayed as expected");
    }
    
    async navigateToLoginPage(baseURL: string) {
        await this.page.goto(baseURL);
        logger.info("Navigated to Login page");
    }
}