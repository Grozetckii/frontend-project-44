install:
	npm ci

lint:
	npm run lint

lint-fix:
	npm run lint:fix

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run