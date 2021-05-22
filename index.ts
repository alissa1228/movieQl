import { GraphQLServer } from 'graphql-yoga';
//import resolvers from './graphql/resolvers';

const resolvers = {
    Query: {
      name: () => "croco"
    }
  };
  

//server라는 새로운 변수를 만들고 여기에 새로운 graphQLServer를 만들어서 환경 설정을 해주면 된다.
const server = new GraphQLServer({
    //모든 타입들에 대한 정의
   typeDefs: "graphql/schema.graphql",
   resolvers
});


server.start(()=>{console.log('server start!')})
