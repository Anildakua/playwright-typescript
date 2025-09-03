import { Page, Locator } from '@playwright/test';
import logger from '../utils/loggerUtil';
import { ExcelUtil } from '../utils/ExcelUtil';

export class AddNewUserPage {

  
  private readonly selectRoleDropDownLocator='#select-role';
  private readonly fullNameInputLocator="input[placeholder='Full Name']";
  private readonly EmailInputLocator="input[placeholder='Email']";
  private readonly whatsAppNoInputLocator="input[placeholder='Whatsapp']";
  private readonly mobileNoInputLocator="input[placeholder='Mobile Number']"; 
  private readonly DateOfBirthDtaePekerLocator="#birth_date";
  private readonly saveButtonLocator="#save";
  private readonly closeButtonLocator=".btn-close";


  // Initialize the page object
    constructor(private page: Page) {};

     async selectA_Role(Role: string) {
        await this.page.selectOption(this.selectRoleDropDownLocator, { value: Role });
        logger.info(`Selected role: ${Role}`);
    }
    async enterFullName(fullName: string) {
        await this.page.fill(this.fullNameInputLocator , fullName);
        logger.info(`Entered full name: ${fullName}`);
    }
    async enterEmail(email: string) {
        await this.page.fill(this.EmailInputLocator , email);
        logger.info(`Entered email: ${email}`);
    }
    async enterWhatsAppNo(whatsAppNo) {
        await this.page.locator(this.whatsAppNoInputLocator).fill(whatsAppNo.toString());
        logger.info(`Entered WhatsApp number: ${whatsAppNo}`);
    }

    async enterMobileNumber(mobileNumber) {
        await this.page.fill(this.mobileNoInputLocator , mobileNumber.toString());
        logger.info(`Entered mobile number: ${mobileNumber}`);
    }
    
    async clickSaveButton() {
        await this.page.locator(this.saveButtonLocator).click();
        logger.info("Clicked on the Save button");
    }
    
    async clickOnDateOfBarth(excelDateValue) {
        const excelSerialNumber = excelDateValue; // e.g., 35490
        const date = new Date((excelSerialNumber - 25569) * 86400 * 1000)
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day= date.getDate();
      
        await this.page.locator(this.DateOfBirthDtaePekerLocator).click();
        await this.page.selectOption("select[data-handler='selectYear']", { label: year.toString()});
        await this.page.selectOption("select[data-handler='selectMonth']",{ index : month-1});
        await this.page.locator(`//td[@data-handler="selectDay"]/a[text()='${day}']`).click();
        logger.info(`Selected date of birth: ${year}-${month}-${day}`);
    }

    async clickOnCloseButton() {
        await this.page.locator(this.closeButtonLocator).click();   
        logger.info("Clicked on the Close button");
    }

    async navigateToAddNewUser() {
        await this.page.goto('/add-new-user');
        logger.info("Navigated to Add New User page");
    }
}       
