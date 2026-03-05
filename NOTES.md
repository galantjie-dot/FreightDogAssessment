# NTES

## How to Run Tests
1. on github
click on repository
then click on actions and click on the test the rerun jobs


## Decisions Made

Automated the “Process email and observe lifecycle” scenario because it covers the most critical workflow: upload → progress → extraction → results.

Added a negative scenario to ensure resilience when emails are malformed.

# Issues Handled

Iframe handling: Needed contentFrame() and null guards. Selector for iframe was dynamic (name vs src).

Flaky selectors: Chakra UI generates dynamic class names (css-xxxx). Had to prefer role=, aria-label=, or getByText({ exact: true }).