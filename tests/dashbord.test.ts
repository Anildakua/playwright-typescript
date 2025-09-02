import { test , expect  } from '../fixtures/pageFixture';
import * as data from '../test-data/logindata.json';

test(' Add new user', async ({ page ,login , dashboard ,addnewuser  }) => {

    
    // Verify successful login by checking the URL or dashboard title
    await page.waitForURL(data.baseURL.dashboardURL);    

    const dashboardTitle = await page.title();
    expect(dashboardTitle).toContain('Dashboard'); // Adjust the expected title as needed   

    // Use homePage to interact with the dashboard page, for example:
    await dashboard.ClickOnAddNewUser();
    
    await addnewuser.selectA_Role('Contractor');
    await addnewuser.enterFullName('asdfggh');
    await addnewuser.enterEmail('qweredcvd');
    await addnewuser.enterMobileNumber('465u647875');
    await addnewuser.enterWhatsAppNo('fvfb dghbn');
    await addnewuser.clickOnDateOfBarth('1997',1,'11');  
    await addnewuser.clickOnCloseButton(); 


})
