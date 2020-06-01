let db = {
  users: [
    {
      userId: "YcFkUmWmObXg9lz6NpWVV1i5t503",
      email: "new2@email.com",
      handle: "new2",
      createdAt: "2020-04-27T14:22:29.102Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/screamchat-8d882.appspot.com/o/29225754693.jpg?alt=media",
      bio: "Hello, my name is new2, nice to meet you",
      website: "https://new2.com",
      location: "Dhaka, Bangladesh",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-04-26T01:02:21.425Z",
      likeCount: 5,
      commentCount: 3,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Lonodn, UK",
    messages: [
      {
        notificationId: "",
        number: 0,
      },
    ],
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa",
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO",
    },
  ],
  comments: [],
};