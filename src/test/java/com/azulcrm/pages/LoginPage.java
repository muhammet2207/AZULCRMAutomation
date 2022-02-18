package com.azulcrm.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends BasePage{

    @FindBy(xpath = "//input[@name='USER_LOGIN']")
    public WebElement usernameInputBox;

    @FindBy(xpath = "//input[@name='USER_PASSWORD']")
    public WebElement passwordInputBox;

    @FindBy(xpath = "//input[@class='login-btn']")
    public WebElement loginButton;

    public void login(String username,String password){
        usernameInputBox.sendKeys(username);
        passwordInputBox.sendKeys(password);
        loginButton.click();
    }
}
