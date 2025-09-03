import { test , expect  } from '../fixtures/pageFixture';
import * as data from '../test-data/logindata.json';
import { ExcelUtil } from '../utils/ExcelUtil';     

test('Create a new user :05', async ({ page ,login , dashboard ,addnewuser  }) => {

    
    // Verify successful login by checking the URL or dashboard title
    await page.waitForURL(data.baseURL.dashboardURL);    

    const dashboardTitle = await page.title();
    expect(dashboardTitle).toContain('Dashboard'); // Adjust the expected title as needed   

    // Use homePage to interact with the dashboard page, for example:
    await dashboard.ClickOnAddNewUser();
    
    await addnewuser.selectA_Role(ExcelUtil.getExcelData("Sheet1",2,1));
    await addnewuser.enterFullName(ExcelUtil.getExcelData("Sheet1",2,2));
    await addnewuser.enterEmail(ExcelUtil.getExcelData("Sheet1",2,4));
    await addnewuser.enterMobileNumber(ExcelUtil.getExcelData("Sheet1",2,3));
    await addnewuser.enterWhatsAppNo(ExcelUtil.getExcelData("Sheet1",2,3));
    await addnewuser.clickOnDateOfBarth(ExcelUtil.getExcelData("Sheet1",2,5) );
    await addnewuser.clickOnCloseButton(); 


})



