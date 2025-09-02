import { Page, Locator, expect } from '@playwright/test';
import logger from '../utils/loggerUtil';

export class DashboardPage {

  private readonly dashboardPageLinkLocator ="//div[text()='Dashboard']";
  private readonly communicationPageLinkLocator="//div[text()='Communication']";
  private readonly userlistPageLocater="//div[text()='User List']";
  private readonly offersPageLinkLocator="//div[text()='Offers']";
  private readonly termsAndConditionsPageLocator="//div[text()='Terms and Conditions']";
  private readonly AddNewUserPageLinkLocator="//a[text()='Add New User']";
  private readonly myProfileDropDownLocator="//img[@id='header_profile_photo_']"; //div[class='avatar avatar-online']

  constructor(private page: Page) { }


  async ClickOnDashboard() {
    await this.page.locator(this.dashboardPageLinkLocator).click(); 
    logger.info("Clicked on the Dashboard link");
  }       
  async ClickOnUserList() {
    await this.page.locator(this.userlistPageLocater).click(); 
    logger.info("Clicked on the User List link");
  }
  async ClickOnCommunication(){
    await this.page.locator(this.communicationPageLinkLocator).click();
    logger.info("Clicked on the Communication link"); 
  }

  async ClickOnOffers(){
    await this.page.locator(this.offersPageLinkLocator).click(); 
    logger.info("Clicked on the Offers link");
  }

  async ClickOnTermsAndConditions() {
    await this.page.locator(this.termsAndConditionsPageLocator).click(); 
    logger.info("Clicked on the Terms and Conditions link");
  }

  async ClickOnAddNewUser() {
    await this.page.locator(this.AddNewUserPageLinkLocator).click(); 
    logger.info("Clicked on the Add New User link");
  }

  async ClickOnMyProfile() {
    await this.page.locator(this.myProfileDropDownLocator).click(); 
    logger.info("Clicked on the My Profile dropdown");
  }


  async ClickOnLogoutButton() {
    await this.page.click('#logout-link'); // Adjust the selector as needed
    logger.info("Clicked on the Logout button and logged out successfully");
  } 
  

  async navigateToDashboard() {
    await this.page.goto('/dashboard');
  }



  async getDashboardTitle() {
    return await this.page.title();
  }

  // Add more methods to interact with the dashboard page as needed
}

