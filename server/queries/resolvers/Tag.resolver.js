export default {
  Tag: {
    posts(root, args, { db }) {
      return db.posts
        .find({
          tagIds: { $in: [root._id] },
        })
        .fetch();
    },
  },
};
