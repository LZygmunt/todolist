const app = [
  {
    text: 'List#1',
    id: 1,
    toDoList: [
      {
        id: 1,
        text: 'Take out the trash',
        completed: true,
      },
      {
        id: 2,
        text: 'Grocery shopping',
        completed: false,
      },
      {
        id: 3,
        text: 'Clean gecko tank',
        completed: false,
      },
      {
        id: 4,
        text: 'Mow lawn',
        completed: true,
      },
      {
        id: 5,
        text: 'Catch up on Arrested Development',
        completed: false,
      },
      {
        id: 6,
        text: 'Fall in coding',
        completed: false,
      },
      {
        id: 7,
        text: 'Listen Dio',
        completed: true,
      },
      {
        id: 8,
        text: 'Destroy nothing',
        completed: true,
      },
      {
        id: 9,
        text: 'Get the carpet and through out',
        completed: false,
      },
    ],
  },
  {
    text: 'List#2',
    id: 2,
    toDoList: [
      {
        id: 1,
        text: 'Wpisowe',
        completed: true,
      },
      {
        id: 2,
        text: 'Nic nierobienie',
        completed: false,
      },
      {
        id: 3,
        text: 'Bycie montrym',
        completed: false,
      },
    ],
  },
  {
    text: 'List#3',
    id: 3,
    toDoList: [
      {
        id: 1,
        text: 'Wpisowe',
        completed: true,
      },
      {
        id: 2,
        text: 'Stage gupka',
        completed: true,
      },
    ],
  },
  {
    text: 'List#4',
    id: 4,
    toDoList: [
      {
        id: 1,
        text: 'Wpisowe',
        completed: true,
      },
      {
        id: 2,
        text: 'Wpisowe',
        completed: true,
      },
      {
        id: 3,
        text: 'Wpisasdgowe',
        completed: false,
      },
      {
        id: 4,
        text: 'false',
        completed: false,
      },
    ],
  },
  {
    text: 'List#5',
    id: 5,
    toDoList: [
      {
        id: 1,
        text: 'Wpisowe',
        completed: true,
      },
    ],
  },
  {
    text: 'List#6',
    id: 6,
    toDoList: [
      {
        id: 1,
        text: 'Wpisowe',
        completed: true,
      },
    ],
  },
];

const dict = {
  'my-id-list-1': {
    text: 'List#1',
    id: 'my-id-list-1',
    toDoList: {
      'my-id-list-1-todo-1': {
        id: 'my-id-list-1-todo-1',
        text: 'Take out the trash',
        completed: true,
      },
      'my-id-list-1-todo-2': {
        id: 'my-id-list-1-todo-2',
        text: 'Grocery shopping',
        completed: false,
      },
      'my-id-list-1-todo-3': {
        id: 'my-id-list-1-todo-3',
        text: 'Clean gecko tank',
        completed: false,
      },
      'my-id-list-1-todo-4': {
        id: 'my-id-list-1-todo-4',
        text: 'Mow lawn',
        completed: true,
      },
      'my-id-list-1-todo-5': {
        id: 'my-id-list-1-todo-5',
        text: 'Catch up on Arrested Development',
        completed: false,
      },
      'my-id-list-1-todo-6': {
        id: 'my-id-list-1-todo-6',
        text: 'Fall in coding',
        completed: false,
      },
      'my-id-list-1-todo-7': {
        id: 'my-id-list-1-todo-7',
        text: 'Listen Dio',
        completed: true,
      },
      'my-id-list-1-todo-8': {
        id: 'my-id-list-1-todo-8',
        text: 'Destroy nothing',
        completed: true,
      },
      'my-id-list-1-todo-9': {
        id: 'my-id-list-1-todo-9',
        text: 'Get the carpet and through out',
        completed: false,
      },
    },
  },
  'my-id-list-2': {
    text: 'List#2',
    id: 'my-id-list-2',
    toDoList: {
      'my-id-list-2-todo-0': {
        id: 'my-id-list-2-todo-0',
        text: 'Wpisowe',
        completed: true,
      },
      'my-id-list-2-todo-2': {
        id: 'my-id-list-2-todo-2',
        text: 'Nic nierobienie',
        completed: false,
      },
      'my-id-list-2-todo-3': {
        id: 'my-id-list-2-todo-3',
        text: 'Bycie montrym',
        completed: false,
      },
    },
  },
  'my-id-list-3': {
    text: 'List#3',
    id: 'my-id-list-3',
    toDoList: {
      'my-id-list-3-todo-1': {
        id: 'my-id-list-3-todo-1',
        text: 'Wpisowe',
        completed: true,
      },
      'my-id-list-3-todo-2': {
        id: 'my-id-list-3-todo-2',
        text: 'Stage gupka',
        completed: true,
      },
    },
  },
  'my-id-list-4': {
    text: 'List#4',
    id: 'my-id-list-4',
    toDoList: {
      'my-id-list-4-todo-1': {
        id: 'my-id-list-4-todo-1',
        text: 'Wpisowe',
        completed: true,
      },
      'my-id-list-4-todo-2': {
        id: 'my-id-list-4-todo-2',
        text: 'Wpisowe',
        completed: true,
      },
      'my-id-list-4-todo-3': {
        id: 'my-id-list-4-todo-3',
        text: 'Wpisasdgowe',
        completed: false,
      },
      'my-id-list-4-todo-4': {
        id: 'my-id-list-4-todo-4',
        text: 'false',
        completed: false,
      },
    },
  },
  'my-id-list-5': {
    text: 'List#5',
    id: 'my-id-list-5',
    toDoList: {
      'my-id-list-5-todo-1': {
        id: 'my-id-list-5-todo-1',
        text: 'Wpisowe',
        completed: true,
      },
    },
  },
  'my-id-list-6': {
    text: 'List#6',
    id: 'my-id-list-6',
    toDoList: {
      'my-id-list-6-todo-1': {
        id: 'my-id-list-6-todo-1',
        text: 'Wpisowe',
        completed: true,
      },
    },
  },
};

export default app;
