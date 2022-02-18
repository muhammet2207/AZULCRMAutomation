$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the user should be able to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_enters_the_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see title as \"(1) Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_should_be_able_to_see_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});