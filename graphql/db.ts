
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

export let movies = [
   {
     id:1,
     name:"LALA Land",
     score : 4.5
   },
   {
    id:2,
    name:"Avengers - Age of Ultron",
    score : 4
  },
  {
    id:3,
    name:"Wonder Woman",
    score : 5
  },
]

  //id를 받아서 해당 id에 해당 하는 것만 걸러낸 후 리턴.
  //모든 people을 거친 다음 person.id값이 전달된 id 값과 같은 것만 리턴.
export const getById = id => {
    const filteredPeople = people.filter(person=> person.id === id);
    return filteredPeople[0];
}

export const deleteMovie = id => {
    //같은 id를 가지지 않는 movie의 배열
    const cleanedMovies = movies.filter(movie=> movie.id !== id);
    //movies 길이가 같은 id를 가지지 않는 movie의 배열보다 길다면 delete, 그렇지 않으면 return false
    if(movies.length > cleanedMovies.length){
      movies = cleanedMovies
      return true
  }
  else{
    return false;
}
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}