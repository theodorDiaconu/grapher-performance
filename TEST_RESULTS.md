# Test Results

You can open http://localhost:3000/graphiql

## Context

Fixtures have been loaded, database is a mongodb cloud instance M0, in Frankfurt, from Iasi, Romania.

All queries have been run at least 10 times, and the amount is the mean.

| Query | Grapher | Standard | Improvement |
| ----- | ------- | -------- | ----------- |
| 1     | 256ms   | 1040ms   | 4x          |
| 2     | 302ms   | 10650ms  | 35x         |
| 3     | 559ms   | >120s    | 200x        |

## Query 1

It's common that we would like to fetch a post, and along with it's information, the comments, and the names of the user who commented, we can ofcourse get many more info, the more we get the harder it is for non-grapher queries.

```js
query {
  posts(_id:"fLJJKH4HApj9temQC") {
    _id
    tags {
      name
    }
    category {
      name
    }
    comments {
      _id
      user {
        _id
      }
    }
  }
}
```

* Grapher: 256ms
* Without Grapher: 1040ms

Performance improvement: 4X

## Query 2

We'd like to list the posts, alongside their tags, creator, and the category they are in. Here we expect Grapher to shine,
because it's strategy of using queries shines in this scenario, because of the way Hypernova works:

```js
query {
  posts {
    title
    tags {
      name
    }
    category {
      name
    }
    user {
      _id
    }
  }
}
```

* Grapher: 302ms
* Without Grapher: 10,650ms

Performance speed: 35X

## Query 3

This is where Grapher trully dwarfs, because Grapher it's so efficient, for a deeply nested query, we can see improvements,
of magnited of hundreds.

If anyone gets the chance to run a similar query in size on SQL and see if they manage to get 500ms.

```js
query {
  posts {
    title
    tags {
      name
    }
    category {
      name
    }
    comments {
      user {
        _id,
        groups {
          name
        }
      }
    }
  }
}
```

* Grapher: 559ms
* Without Grapher: It took 2min then it stopped with (Failed to fetch)

So we are talking: Minimum 200X
