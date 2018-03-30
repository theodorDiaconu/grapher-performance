export default {
  Query: {
    users(_, args, { db }, ast) {
      return db.users.find().fetch();
    },

    comments(_, args, { db }, ast) {
      return db.comments.find().fetch();
    },

    posts(_, { _id }, { db }, ast) {
      let filters = {};

      if (_id) {
        filters = { _id };
      }

      return db.posts.find(filters).fetch();
    },

    tags(_, args, { db }, ast) {
      return db.tags.find().fetch();
    },

    groups(_, args, { db }, ast) {
      return db.groups.find().fetch();
    },

    postCategories(_, args, { db }) {
      return db.postCateegories.find().fetch();
    },
  },
};
