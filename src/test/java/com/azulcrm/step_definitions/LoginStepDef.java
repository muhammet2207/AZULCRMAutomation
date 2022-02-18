package com.azulcrm.step_definitions;

import com.azulcrm.pages.LoginPage;
import com.azulcrm.utilities.ConfigurationReader;
import com.azulcrm.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LoginStepDef {
    LoginPage loginPage = new LoginPage();

    @Given("the user on the login page")
    public void the_user_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the user enters the valid credentials")
    public void the_user_enters_the_valid_credentials() {
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");
        loginPage.usernameInputBox.sendKeys(username);
        loginPage.passwordInputBox.sendKeys(password);
    }

    @When("the user clicks login button")
    public void the_user_clicks_login_button() {
        loginPage.loginButton.click();
    }

    @Then("the user should be able to see title as {string}")
    public void the_user_should_be_able_to_see_title_as(String expectedTitle) {
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Verify the title", expectedTitle, actualTitle);
    }
}
