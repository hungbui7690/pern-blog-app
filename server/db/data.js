const users = [
  {
    username: 'admin',
    email: 'admin@admin',
    password: '$2a$10$oSOfpQCa57M3.TxhYQq0p.dGfsxSXXugg0Vvue6tYJEj3SLPpTFm2',
    image: 'https://picsum.photos/50/50',
  },
  {
    username: 'user',
    email: 'user@user',
    password: '$2a$10$oSOfpQCa57M3.TxhYQq0p.dGfsxSXXugg0Vvue6tYJEj3SLPpTFm2',
    image: 'https://picsum.photos/50/50',
  },
  {
    username: 'test',
    email: 'test@test',
    password: '$2a$10$oSOfpQCa57M3.TxhYQq0p.dGfsxSXXugg0Vvue6tYJEj3SLPpTFm2',
    image: 'https://picsum.photos/50/50',
  },
]

const posts = [
  {
    title: 'My first post',
    desc: 'This is my first post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my first post body',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'My second post',
    desc: 'This is my second post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my second post body',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'My third post',
    desc: 'This is my third post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my third post body',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: 'My fourth post',
    desc: 'This is my fourth post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my fourth post body',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: 'My fifth post',
    desc: 'This is my fifth post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my fifth post body',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    title: 'My sixth post',
    desc: 'This is my sixth post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my sixth post body',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    title: 'My seventh post',
    desc: 'This is my seventh post',
    image: 'https://picsum.photos/1200/800',
    body: 'This is my seventh post body',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = { users, posts }
