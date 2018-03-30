import './imports/fixtures';
import { load } from 'graphql-load';
import EntitiesModule from './entities';
import QueryType from './queries/Query';
import NormalResolversModule from './queries/resolvers';
import QueryNormalResolver from './queries/QueryNormal.resolver';
import QueryGrapherResolver from './queries/QueryGrapher.resolver';

const WITH_GRAPHER = false;

load([
  EntitiesModule,
  {
    typeDefs: [QueryType],
  },
]);

if (WITH_GRAPHER) {
  load({
    resolvers: QueryGrapherResolver,
  });
} else {
  load([
    NormalResolversModule,
    {
      resolvers: QueryNormalResolver,
    },
  ]);
}
