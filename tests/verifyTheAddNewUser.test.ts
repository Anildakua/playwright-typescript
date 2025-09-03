import { test , expect  } from '../fixtures/pageFixture';
import * as data from '../test-data/logindata.json';
import { ExcelUtil } from '../utils/ExcelUtil';     
import logger from '../utils/loggerUtil';

test('verify the Add new user pop-up :06 ', async ({ page ,login , dashboard ,addnewuser  }) => {

    
    // Verify successful login by checking the URL or dashboard title
    await page.waitForURL(data.baseURL.dashboardURL);    

    const dashboardTitle = await page.title();
    expect(dashboardTitle).toContain('Dashboard'); // Adjust the expected title as needed   

    for (let i = 2; i <= 10; i++) {

    await dashboard.ClickOnAddNewUser();
    await addnewuser.selectA_Role(ExcelUtil.getExcelData("Sheet1",i,1));
    await addnewuser.enterFullName(ExcelUtil.getExcelData("Sheet1",i,2));
    await addnewuser.enterEmail(ExcelUtil.getExcelData("Sheet1",i,4));
    await addnewuser.enterMobileNumber(ExcelUtil.getExcelData("Sheet1",i,3));
    await addnewuser.enterWhatsAppNo(ExcelUtil.getExcelData("Sheet1",i,3));
    await addnewuser.clickOnDateOfBarth(ExcelUtil.getExcelData("Sheet1",i,5) );
    await addnewuser.clickOnCloseButton(); 
    logger.info("Complite the all fields test no :"+i)
    }
})



