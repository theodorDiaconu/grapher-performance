export default {
  User: {
    groups(root, args, { db }) {
      return db.groups
        .find({
          _id: { $in: root.groupIds },
        })
        .fetch();
    },
    posts(root, args, { db }) {
      return db.posts
        .find({
          userId: root._id,
        })
        .fetch();
    },
    comments(root, args, { db }) {
      return db.comments
        .find({
          userId: root._id,
        })
        .fetch();
    },
  },
};
