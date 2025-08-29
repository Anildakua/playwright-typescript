import { test , expect  } from '../fixtures/pageFixture'; 
import * as data from '../test-data/logindata.json';
import { ExcelUtil } from '../utils/excelUtil';
import  logger  from "../utils/loggerUtil";

test(' valid Login Test', async ({ page , baseURL ,login }) => {
    
    // Navigate to the login page
    await page.goto(`${baseURL}`);

    // Enter email and password
    await login.enterEmail(data.validuser.email);
    await login.enterPassword(data.validuser.password); 

    // Click the login button
    await login.clickLoginButton(); 

    // Verify successful login by checking the URL or dashboard title
    await login.verifyLoginSuccess(); // Using the new method from loginPage class

});


test('Invalid Login Test', async ({ page , baseURL , login}) => {

    // Navigate to the login page
    await page.goto(`${baseURL}`);  

    // Enter invalid email and password
    await login.enterEmail(ExcelUtil.getExcelData('Sheet1',2,1));
    await login.enterPassword(ExcelUtil.getExcelData('Sheet1',2,3));

    // Click the login button
    await login.clickLoginButton();

    await login.LoginFailureErrorMassageDisplayed(); // Using the new method from loginPage class

   
});


test('Forgot Password Link Test', async ({ page , baseURL ,login}) => {

    // Navigate to the login page
    await page.goto(`${baseURL}`);  

    // Click the "Forgot Password?" link
    await login.clickForgotPassword();

    // Verify that the user is redirected to the forgot password page
    await expect(page).toHaveURL(data.baseURL.forgetedPasswordURL); // Adjust the

    // expected URL for the forgot password page
    const forgotPasswordTitle = await page.title();
    expect(forgotPasswordTitle).toContain('Forgot Password'); // Adjust the expected title as needed
    
});