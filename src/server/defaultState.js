import md5 from "md5";

export const defaultState = {
  // session: {
  //   authenticated: false,
  // },
  users: [
    {
      id: "U1",
      name: "Dev",
      passwordHash: md5("User1"),
    },
    {
      id: "U2",
      name: "Anbu",
      passwordHash: md5("Anbu"),
    },
  ],
  groups: [
    {
      name: "TO DO",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Create tests using JEST",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Learn React and React Native",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Create GULP for automation",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "Learn Azure Dev Ops",
      id: "T2",
      group: "G3",
      owner: "U2",
      isComplete: true,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!",
    },
  ],
};
