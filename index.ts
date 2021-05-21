import { GraphQLServer } from 'graphql-yoga';
console.log('test');

// const typeDefs = {

// }

// const resolvers= {

// }

//server라는 새로운 변수를 만들고 여기에 새로운 graphQLServer를 만들어서 환경 설정을 해주면 된다.
const server = new GraphQLServer({
    //No schema defined-> 아직 정의 안해줬으니까! 오류 나는 건 당연한거임 
});

server.start(()=>{console.log('server start!')})
