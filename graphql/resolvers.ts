import { people, getById } from "./db";

// const resolvers = {
//     Query: {
//       name: () => "croco"
//     }
//   };
  
const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getById(id)
  }
  //(_,) = (object, args) 
  //(현재 object를 보내는 object, args) -> playground에서 id:1을 요구하면 {id:1}이 찍힐 거임
  //{id} 는 args.id와 같음
};
export default resolvers;
