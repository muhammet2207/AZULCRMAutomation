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
  "name": "User should be able to add a department",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user should be able to see title as \"(1) Company Structure\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.LoginStepDef.the_user_should_be_able_to_see_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add Department button",
  "keyword": "When "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_clicks_the_Add_Department_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user writes Department Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_writes_Department_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user select Parent Department",
  "keyword": "And "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_select_Parent_Department()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Add button",
  "keyword": "And "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_clicks_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see the added department",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azulcrm.step_definitions.EmployeesStepDef.the_user_should_be_able_to_see_the_added_department()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});