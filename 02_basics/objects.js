const obj1 = {};
obj1.name = "sabit";
obj1.id = "123avc";
obj1.email = "mesabit@GMAIL.COM";
obj1.isloggedIn = false;

const obj2 = {
  address: "321cba",
  username: "khan",
  email2: "khan@gmail.com",
  isloggedIn: true,
};
// const obj3 = Object.assign(obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// *****************************************************

const course = {
  id: "1",
  name: "javaScript",
  length: "20 hours",
};
const { length } = course;
console.log(length);
