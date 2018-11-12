# Daniel Pino - SalesLoft Development Interview

Requirements found here: https://docs.google.com/document/d/1SbhRTd6ewr0w1rgE-nB8yk7LR1exy8rL0JJCMAwgfns/edit


## Remaining Tasks
- Fix confidence points to indicate strong match Vs weak match
  - Idea: Given number of letters in the input (`n`), the perfect score would be `n!`. Might make sense that anything over `(n/2)!` would be high enough to guess correctly.
  - Idea: Fix points by instead of sharding at every length, shard at every 2nd or 3rd length
- Better styling around the people cards (and generally all over the page)
- Refactor code in the PeoplePage to contain less logic. It should be more of an orchestrator
- The dupe check page has logic all over the place. Clean that up by merging with existing logic (currently in the reducer and/or util)
- Don't let the user click go next after no data is pulled
- Fix performance:
  - Idea: Split the people data in the store by page. If the page exists in redux store, don't call API. (may need a time to live before refreshing)
  - Idea: Cache people info in a local DB. The site is suffering since every page needs to load from the API on every page.
  - Idea: People.all should iterate until it pulls all available people from the API. May be dangerous given synchronous nature of ruby. May not scale well.