import { Config } from 'meteor/cultofcoders:apollo';
import cors from 'cors';

// Maybe you want thsi only in development
Meteor.isDevelopment && Config.EXPRESS_MIDDLEWARES.push(cors());
