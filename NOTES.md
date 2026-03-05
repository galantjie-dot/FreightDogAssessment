# NOTES

## Bug Reports
- **Login timeout**: Playwright test failed due to brittle selectors (`#i1668`). Fixed by using text-based selectors (`input[type="email"]`, `button:has-text("Next")`).
- **Case sensitivity**: Import paths failed when folder names differed in casing (`Pages` vs `pages`). Fixed by standardizing folder names and imports.

## How to Run Tests
1. Install dependencies:
   ```bash
   npm install
   npx playwright install


Automated the “Process email and observe lifecycle” scenario because it covers the most critical workflow: upload → progress → extraction → results.

Added a negative scenario to ensure resilience when emails are malformed.