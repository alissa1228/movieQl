
export const people = [
    {
    id : 1,
    name : "crocodile",
    age: 20,
    gender: "female"
    },
    {
      id : 2,
      name : "johnny",
      age: 28,
      gender: "male"
    },
    {
      id : 3,
      name : "lucas",
      age: 24,
      gender: "male"
     },
    {
      id : 4,
      name : "tayong",
      age: 27,
      gender: "male"
    },
  ];

  //id를 받아서 해당 id에 해당 하는 것만 걸러낸 후 리턴.
  //모든 people을 거친 다음 person.id값이 전달된 id 값과 같은 것만 리턴.
  export const getById = id => {
    const filteredPeople = people.filter(person=> person.id === id);
    return filteredPeople[0];
  }