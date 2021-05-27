import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    //url:"https://movieql.now.sh/"
    url:"http://localhost:4000/"
    //movieQl 서버 열고 진행.
});

export default client;

//url 필요