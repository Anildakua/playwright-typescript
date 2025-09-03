import { test , expect  } from '@playwright/test';
import * as data from '../test-data/logindata.json';
import { ExcelUtil } from '../utils/ExcelUtil';
import  logger  from "../utils/loggerUtil";
import { loginPage } from '../pages/login_page';


test(' valid Login Test :01', async ({ page , baseURL }) => {
    const login = new loginPage(page);
    // Navigate to the login page
    await page.goto(`${baseURL}`);

    // Enter email and password
    await login.enterEmail(data.validuser.email);
    await login.enterPassword(data.validuser.password); 

    // Click the login button
    await login.clickLoginButton(); 

    // Verify successful login by checking the URL or dashboard title
    await login.verifyLoginSuccess(); // Using the new method from loginPage class
    logger.info("Valid Login test is complited");

});


test('Invalid Login Test :02', async ({ page , baseURL }) => {
    const login = new loginPage(page);
    // Navigate to the login page
    await page.goto(`${baseURL}`);  

    // Enter invalid email and password
    await login.enterEmail(ExcelUtil.getExcelData('Sheet1',2,2));
    await login.enterPassword(ExcelUtil.getExcelData('Sheet1',2,4));

    // Click the login button
    await login.clickLoginButton();

    await login.LoginFailureErrorMassageDisplayed(); // Using the new method from loginPage class

    logger.info("Invalid Login test is complited");
   
});


test('Forgot Password Link Test :03', async ({ page , baseURL }) => {
    const login = new loginPage(page);
    // Navigate to the login page
    await page.goto(`${baseURL}`);  

    // Click the "Forgot Password?" link
    await login.clickForgotPassword();

    // Verify that the user is redirected to the forgot password page
    await expect(page).toHaveURL(data.baseURL.forgetedPasswordURL); // Adjust the

    // expected URL for the forgot password page
    const forgotPasswordTitle = await page.title();
    expect(forgotPasswordTitle).toContain('Forgot Password'); // Adjust the expected title as needed
    await page.goBack();
    logger.info("Forgot Password Link test is complited");
});