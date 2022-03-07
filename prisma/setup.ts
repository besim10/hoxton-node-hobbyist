import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    fullName: "Nicolas Marcora",
    photoUrl: "https://avatars.githubusercontent.com/u/16916098?v=4",
    email: "nicolas@email.com",
  },
  {
    fullName: "Rinor Rama",
    photoUrl: "https://www.f6s.com/content-resource/profiles/2096207_th1.jpg",
    email: "rinor@email.com",
  },
  {
    fullName: "Arita Osmani",
    photoUrl:
      "https://g.acdn.no/obscura/API/dynamic/r1/escenic/tr_1000_2000_s_f/0000/archive/04975/1044586_1020102257_4975378a.jpg?chk=4CF140",
    email: "arita@email.com",
  },
];

const hobbies = [
  {
    name: "Playing soccer",
    imageUrl:
      "https://games4esl.com/wp-content/uploads/13-5.png?ezimgfmt=rs:300x300/rscb172/ng:webp/ngcb172",
    active: true,
  },
  {
    name: "Skateboarding",
    imageUrl:
      "https://games4esl.com/wp-content/uploads/27-5.png?ezimgfmt=rs:300x300/rscb172/ng:webp/ngcb172",
    active: false,
  },
  {
    name: "Paiting",
    imageUrl:
      "https://games4esl.com/wp-content/uploads/3-9.png?ezimgfmt=rs:300x300/rscb172/ng:webp/ngcb172",
    active: true,
  },
  {
    name: "Dancing",
    imageUrl:
      "https://games4esl.com/wp-content/uploads/6-7.png?ezimgfmt=rs:300x300/rscb172/ng:webp/ngcb172",
    active: true,
  },
  {
    name: "Blogging",
    imageUrl:
      "https://games4esl.com/wp-content/uploads/29-5.png?ezimgfmt=rs:300x300/rscb172/ng:webp/ngcb172",
    active: true,
  },
];
const usersHobbies = [
  {
    userId: 1,
    hobbyId: 1,
  },
  {
    userId: 1,
    hobbyId: 2,
  },
  {
    userId: 2,
    hobbyId: 1,
  },
  {
    userId: 2,
    hobbyId: 3,
  },
  {
    userId: 3,
    hobbyId: 1,
  },
  {
    userId: 1,
    hobbyId: 4,
  },
  {
    userId: 3,
    hobbyId: 4,
  },
  {
    userId: 2,
    hobbyId: 5,
  },
  {
    userId: 3,
    hobbyId: 5,
  },
];
async function createStuff() {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
  for (const hobby of hobbies) {
    await prisma.hobby.create({ data: hobby });
  }
  for (const userHobby of usersHobbies) {
    await prisma.usersHobbies.create({ data: userHobby });
  }
}
createStuff();
