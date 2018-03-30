import UserResolver from './User.resolver';
import TagResolver from './Tag.resolver';
import PostResolver from './Post.resolver';
import GroupResolver from './Group.resolver';
import CommentResolver from './Comment.resolver';
import PostCategoryResolver from './PostCategory.resolver';

export default {
  resolvers: [
    UserResolver,
    TagResolver,
    PostResolver,
    CommentResolver,
    GroupResolver,
    PostCategoryResolver,
  ],
};
