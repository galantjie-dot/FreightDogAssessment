# Bug Report

Title: [Freightdog AI add‑in fails to display results when processing large emails with attachments]

## Environment
Outlook Web (Office 365)

Freightdog AI add‑in (task pane iframe)

Browser: Chrome 122

Test account: logistics@freightdog.com

## Steps to Reproduce
1. Log into Outlook Web with valid credentials.
2. Select a logistics email with a large PDF attachment (~5MB).
3. Open the Freightdog AI add‑in from the task pane.
4. Click Process Email.
5. Wait for the extraction process to complete (~30–60 seconds).





## Expected Result
[Add‑in should upload the email, process it, and display structured shipment details in the task pane.]

## Actual Result
[Upload completes successfully.

“Processing…” spinner remains indefinitely.

No “Results Ready” message is displayed.]

## Severity/Priority
- Priority: [High/Medium/Low]
Users cannot process emails with attachments, which is common in logistics workflows.

Blocks adoption of the add‑in for real‑world use case
