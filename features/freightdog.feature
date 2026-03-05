Feature: Freightdog AI Outlook Add-in
  As a logistics operator
  I want to process emails with Freightdog AI
  So that shipment details are automatically extracted into structured data

  Scenario: Open Freightdog AI add-in from Outlook Web
    Given I am logged into Outlook Web with valid credentials
    And I have a logistics email in my inbox
    When I open the Freightdog AI add-in from the task pane
    Then the add-in should load successfully
    And display options to process the selected email

  Scenario: Process email and observe lifecycle
    Given I have opened the Freightdog AI add-in
    When I click to process the selected logistics email
    Then the system should upload the email content
    And show progress of data extraction
    And finally display structured results

  Scenario: Verify extracted shipment details
    Given Freightdog AI has processed the logistics email
    When the results are displayed
    Then I should see structured data including shipment details, packing lists, invoices, and delivery terms
    And the extracted data should match the information in the original email


//Negative scenarios

Scenario: Handle email with missing or malformed data
  Given I have opened the Freightdog AI add-in
  And I select a logistics email with incomplete or malformed shipment details
  When I process the email
  Then the system should upload the email content
  And attempt data extraction
  And display a clear error message or warning indicating missing or invalid fields
  And allow me to continue without crashing the add-in
