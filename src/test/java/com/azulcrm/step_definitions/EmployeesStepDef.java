package com.azulcrm.step_definitions;

import com.azulcrm.pages.DashboardPage;
import com.azulcrm.pages.EmployeesPage;
import com.azulcrm.pages.LoginPage;
import com.azulcrm.utilities.BrowserUtils;
import com.azulcrm.utilities.ConfigurationReader;
import com.azulcrm.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class EmployeesStepDef {

    EmployeesPage employeesPage=new EmployeesPage();

    @Given("the user logged in")
    public void the_user_logged_in() {
        Driver.get().get(ConfigurationReader.get("url"));
        LoginPage loginPage=new LoginPage();
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");
        loginPage.login(username,password);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Verify the title", "(1) Portal", actualTitle);
    }

    @When("the user clicks to Employees tab")
    public void the_user_clicks_to_Employees_tab() {
        employeesPage.EmployeeTab.click();
    }
    @When("the user clicks the Add Department button")
    public void the_user_clicks_the_Add_Department_button() {
        employeesPage.addDepartmentButton.click();
    }

    @When("the user writes Department Name")
    public void the_user_writes_Department_Name() {
        employeesPage.departmentName.sendKeys("New Fancy Department");
    }

    @When("the user select Parent Department")
    public void the_user_select_Parent_Department() {
        Select select=new Select(employeesPage.parentDepartment);
        select.selectByIndex(3);
    }

    @When("the user clicks Add button")
    public void the_user_clicks_Add_button()  {
        employeesPage.addButton.click();
        BrowserUtils.waitForPageToLoad(3);
    }

    @Then("the user should be able to see the added department")
    public void the_user_should_be_able_to_see_the_added_department() {
        Assert.assertTrue("Verify new Department added",employeesPage.addedNewDepartment.isDisplayed());
    }

}
