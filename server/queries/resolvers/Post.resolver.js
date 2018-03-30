export default {
  Post: {
    comments(root, args, { db }) {
      return db.comments
        .find({
          postId: root._id,
        })
        .fetch();
    },
    user(root, args, { db }) {
      return db.users.findOne(root.userId);
    },
    tags(root, args, { db }) {
      return db.tags
        .find({
          _id: { $in: root.tagIds },
        })
        .fetch();
    },
    category(root, args, { db }) {
      return db.postCategories.findOne(root.categoryId);
    },
  },
};
