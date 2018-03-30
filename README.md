## Setup

```js
meteor npm i
meteor run
```

## Fixtures

Fixtures will start running by default look in `server/imports/fixtures.js`

## Visualise API

Open `private/visualise.html` while meteor is running

## Testing

Look in [TEST RESULTS](./TEST_RESULTS.md)

## Clear db

```js
db.users.remove({});
db.comments.remove({});
db.tags.remove({});
db.groups.remove({});
db.posts.remove({});
db.postCategories.remove({});
```
