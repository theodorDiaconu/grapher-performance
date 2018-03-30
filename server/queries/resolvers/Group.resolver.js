export default {
  Group: {
    users(root, args, { db }) {
      return db.users
        .find({
          groupIds: { $in: [root._id] },
        })
        .fetch();
    },
  },
};
