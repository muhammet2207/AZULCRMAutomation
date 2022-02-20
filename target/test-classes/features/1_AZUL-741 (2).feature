@AZUL-746
Feature: Default

	Background:
		#@AZUL-741
		Given the user on the login page
		When the user enters the valid credentials
		And the user clicks login button
		Then the user should be able to see title as "(1) Portal"
		When the user clicks to Employees tab
		

	#*User Story:* As a user, I should be able to use functions under Employee menu
	#
	# 
	#
	#*Acceptance Criteria:*
	# # *User should be able to display company structure.* 
	# # User should be able to add a department.
	# # User should be able to find employees by search box.
	# # User should be able to find employees by search by Alphabet.
	# # User should be able to export the employee list.
	# # User should be able to display telephone directory
	# # User should be able to send message to employee from the telephone directory
	@AZUL-742
	Scenario: Display company structure. 
		Then the user should be able to see title as "(1) Company Structure"	

	#*User Story:* As a user, I should be able to use functions under Employee menu
	#
	# 
	#
	#*Acceptance Criteria:*
	# # User should be able to display company structure. 
	# # *User should be able to add a department.*
	# # User should be able to find employees by search box.
	# # User should be able to find employees by search by Alphabet.
	# # User should be able to export the employee list.
	# # User should be able to display telephone directory
	# # User should be able to send message to employee from the telephone directory
	@AZUL-743
	Scenario: Add a department.
		Then the user should be able to see title as "(1) Company Structure"
		When the user clicks the Add Department button
		And the user writes Department Name
		And the user select Parent Department
		And the user clicks Add button
		Then the user should be able to see the added department	

	#*User Story:* As a user, I should be able to use functions under Employee menu
	#
	# 
	#
	#*Acceptance Criteria:*
	# # User should be able to display company structure. 
	# # User should be able to add a department.
	# # *User should be able to find employees by search box.*
	# # User should be able to find employees by search by Alphabet.
	# # User should be able to export the employee list.
	# # User should be able to display telephone directory
	# # User should be able to send message to employee from the telephone directory
	@AZUL-744
	Scenario: Find employees by search box.
		Given the user clicks Find Employee tab
		Then the user should be able to see title as "(1) Find Employee"
		When the user search "Alex Deep" via search box
		Then the user should be able to see employees name as "Alex Deep"	

	#*User Story:* As a user, I should be able to use functions under Employee menu
	#
	# 
	#
	#*Acceptance Criteria:*
	# # User should be able to display company structure. 
	# # User should be able to add a department.
	# # User should be able to find employees by search box.
	# # *User should be able to find employees by search by Alphabet.*
	# # User should be able to export the employee list.
	# # User should be able to display telephone directory
	# # User should be able to send message to employee from the telephone directory
	@AZUL-745
	Scenario: Find employees by search by Alphabet.
		Given the user clicks Find Employee tab
		Then the user should be able to see title as "(1) Find Employee"
		When the user clicks Search By Alphabet tab
		And the user choose any alphabet
		Then the user should be able to see the employees name