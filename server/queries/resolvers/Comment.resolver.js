export default {
  Comment: {
    user(root, args, { db }) {
      return db.users.findOne(root.userId);
    },
    post(root, args, { db }) {
      return db.posts.findOne(root.postId);
    },
  },
};
