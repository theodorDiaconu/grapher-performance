import { Random } from 'meteor/random';
import { db } from 'meteor/cultofcoders:grapher';
import { Accounts } from 'meteor/accounts-base';
import uuid from 'uuid/v4';

const USERS = 10;
const POST_PER_USER = 20;
const COMMENTS_PER_POST = 20;
const GROUPS = ['Admins', 'Super Users', 'Apollo Masters', 'Other'];
const TAGS = [
  'graphql-performance',
  'graphql-tools',
  'apollo-new',
  'destroy-the-world',
];
const POST_CATEGORIES = ['JavaScript', 'Meteor', 'React', 'Other'];
const COMMENT_TEXT_SAMPLES = ['Good', 'Bad', 'Neutral'];

const createUser = (email, password) => {
  const userId = Accounts.createUser({ email, password });

  return db.users.findOne(userId);
};

Meteor.setTimeout(function() {
  if (db.users.find().count() > 0) {
    return;
  }

  console.log('[ok] now started to load fixtures, patience padawan!');

  let tags = TAGS.map(name => db.tags.insert({ name }));
  let groups = GROUPS.map(name => db.groups.insert({ name }));
  let categories = POST_CATEGORIES.map(name =>
    db.postCategories.insert({ name })
  );

  let users = [];
  _.each(_.range(USERS), idx => {
    users.push(createUser(`user-${uuid()}@app.com`, '12345'));
  });

  _.each(users, user => {
    const userPostLink = db.users.getLink(user, 'posts');
    const userGroupLink = db.users.getLink(user, 'groups');

    userGroupLink.add(_.sample(groups));

    _.each(_.range(POST_PER_USER), idx => {
      let post = {
        title: `User Post - ${idx}`,
      };

      userPostLink.add(post);
      const postCommentsLink = db.posts.getLink(post, 'comments');
      const postTagsLink = db.posts.getLink(post, 'tags');
      const postCategoryLink = db.posts.getLink(post, 'category');
      postCategoryLink.set(_.sample(categories), { random: Random.id() });
      postTagsLink.add(_.sample(tags));

      _.each(_.range(COMMENTS_PER_POST), idx => {
        let comment = {
          text: _.sample(COMMENT_TEXT_SAMPLES),
        };

        postCommentsLink.add(comment);
        db.comments.getLink(comment, 'user').set(_.sample(users));
      });
    });
  });

  console.log('[ok] fixtures have been loaded.');
}, 2000);
// We wait 2s for all links and inversed link to properly load
