import {test as mytest , expect} from '@playwright/test';
import { loginPage } from '../pages/login_page';
import { DashboardPage } from '../pages/dashbord_page';
import { AddNewUserPage } from '../pages/addNewUser_page';
import { forgotPassword } from '../pages/forgotPassword_page';
import * as data from '../test-data/logindata.json';

type pages = {
    login: loginPage;
    dashboard: DashboardPage;
    addnewuser: AddNewUserPage;
    forgotPassword : forgotPassword;
}


const myPages= mytest.extend<pages>({ 

    login: async ({ page }, use) => {
        const log_in = new loginPage(page);
        await log_in.navigateToLoginPage(data.baseURL.url);
        await log_in.loginToApplication(data.validuser.email, data.validuser.password);
        await use(log_in);
    },
    
    addnewuser: async ({ page }, use) => {
        await use(new AddNewUserPage(page));
    },

    dashboard: async ({ page }, use) => {

        const dashbord =new DashboardPage(page)
        await use(dashbord);
        await dashbord.ClickOnMyProfile();
        await dashbord.ClickOnLogoutButton();
    },

    forgotPassword: async ({page} ,use) =>{
        await use(new forgotPassword(page));
    }
    
})

export const test= myPages;

export { expect };
    

