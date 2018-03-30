# Grapher Performance Testing

Here we test what an impact can Grapher have on the performance and cost of your infrastructure, provided you use MongoDB and you make use of a lot of relations.

Quickly create your own cluster to test this out: http://mbsy.co/lHRhH it's free

Summary:

| Query | Grapher | Standard | Improvement |
| ----- | ------- | -------- | ----------- |
| 1     | 256ms   | 1040ms   | 4x          |
| 2     | 302ms   | 10650ms  | 35x         |
| 3     | 559ms   | >120s    | 200x        |

Verdict: INCREDIBLY EXPONENTIAL.

Look in [TEST RESULTS](./TEST_RESULTS.md) to see how we did the tests, so you can do them too!

## Setup

We use:

* cultofcoders:apollo
* cultofcoders:grapher

```js
meteor npm i
meteor run
```

To do justice to Grapher:

* Use a remote database
* We should have had many other fields in db, not only the minimal ones, that's how it would have shined even more!

## File Structure

* server/load.js - Here you can enable/disable Grapher
* server/entities/\* - Here are the GraphqlTypes
* imports/fixtures - Here is where the demo data is loaded
* private/visualise.html - Here you can visualise the data schema
* queries/QueryGrapher.resolver.js - This is how Grapher resolvers look like
* queries/QueryNormal.resolver.js + queries/resolvers/\* - The resolvers needed for non Grapher linking

## Fixtures

Fixtures will start running by default look in `server/imports/fixtures.js`

## Visualise API

Open `private/visualise.html` in your browser, while Meteor is running

## Clear db

```js
db.users.remove({});
db.comments.remove({});
db.tags.remove({});
db.groups.remove({});
db.posts.remove({});
db.postCategories.remove({});
```
