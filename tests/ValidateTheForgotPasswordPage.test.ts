import { expect, test } from "@playwright/test";
import * as data from '../test-data/logindata.json';
import { ExcelUtil } from "../utils/ExcelUtil";
import logger from "../utils/loggerUtil";
import { forgotPassword } from "../pages/forgotPassword_page";
import { loginPage } from "../pages/login_page";


test('Validate the forgot password page :04', async ({ page ,baseURL }) => {

   const login = new loginPage(page);
   const forgotPass= new forgotPassword(page);
    // Navigate to the login page
    await page.goto(`${baseURL}`);
    // Click the "Forgot Password?" link
    await login.clickForgotPassword();

    // Verify that the user is redirected to the forgot password page
    await expect(page).toHaveURL(data.baseURL.forgetedPasswordURL); // Adjust the

    await forgotPass.enterEmail(ExcelUtil.getExcelData("Sheet1",2,4));
    await forgotPass.ClickOnTheSendResetLinkButton();
    await forgotPass.WarningPopUp();
    await forgotPass.clickBackToLoginButton();
    await forgotPass.verifytheloginPageisDisplayed();
    
    logger.info("Forgot Password Link test is complited");
})