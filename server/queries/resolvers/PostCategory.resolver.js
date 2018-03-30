export default {
  PostCategory: {
    posts(root, args, { db }) {
      return db.posts
        .find({
          categoryId: root._id,
        })
        .fetch();
    },
  },
};
