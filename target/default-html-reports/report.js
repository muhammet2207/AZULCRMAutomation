$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Employees.feature");
formatter.feature({
  "name": "As a user, I should be able to use functions under Employees menu",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to Employees tab",
  "keyword": "When "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_clicks_to_Employees_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to find employees by search by Alphabet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user clicks Find Employee tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_clicks_Find_Employee_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see title as \"(1) Find Employee\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_should_be_able_to_see_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Search By Alphabet tab",
  "keyword": "When "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_clicks_Search_By_Alphabet_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user choose any alphabet",
  "keyword": "And "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_choose_any_alphabet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see the employees name",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_should_be_able_to_see_the_employees_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});