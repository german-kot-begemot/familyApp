import { Task } from '@/pages/TasksPage/tasksTypes';
import type {
  LoginErrorResponse,
  LoginSuccessResponse,
  RegisterErrorResponse,
  RegisterSuccessResponse,
} from '../../features/auth/authTypes';
import { Reward } from '@/pages/RewardsPage/rewardsTypes';

export const mockLoginDto = {
  email: 'john.doe@example.com',
  password: 'password123',
};

export const mockLoginResponse: LoginSuccessResponse = {
  token: 'mockToken',
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'parent',
    family: {
      id: 'family123',
      code: 'FAMCODE',
    },
  },
};

export const mockLoginError: LoginErrorResponse = {
  status: 401,
  message: 'Invalid email or password',
};

export const mockRegisterResponse: RegisterSuccessResponse = {
  message: 'Registration successful',
  token: 'mockRegisterToken',
  user: {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'parent',
    family: {
      id: 'family123',
      code: 'FAMCODE',
    },
  },
};

export const mockRegisterError: RegisterErrorResponse = {
  status: 400,
  message: 'Email already in use',
};

export const mockTasks: Task[] = [
  {
    id: 'task1',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Do the dishes',
    description: 'Clean all the dishes after dinner',
    points: 10,
    status: 'todo',
  },
  {
    id: 'task2',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Take out the trash',
    description: 'Take the trash out to the curb on Tuesday night',
    points: 5,
    status: 'todo',
  },
  {
    id: 'task3',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Mow the lawn',
    description: 'Mow the front and back lawn this weekend',
    points: 20,
    status: 'todo',
  },
  {
    id: 'task4',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Clean your room',
    description: 'Tidy up your room and put away your toys',
    points: 15,
    status: 'todo',
  },
  {
    id: 'task5',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Help with homework',
    description: 'Assist your sibling with their homework for 30 minutes',
    points: 10,
    status: 'todo',
  },
];

export const mockRewards: Reward[] = [
  {
    id: 'reward1',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Ice Cream Treat',
    description: 'Enjoy a delicious ice cream treat at your favorite parlor.',
    points: 50,
  },
  {
    id: 'reward2',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Movie Night',
    description: 'Pick a movie and enjoy a fun movie night with the family.',
    points: 100,
  },
  {
    id: 'reward3',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Extra Playtime',
    description: 'Earn extra playtime with your favorite toys or games.',
    points: 75,
  },
  {
    id: 'reward4',
    familyId: 'family123',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=400',
    title: 'Extra Screen Time',
    description: 'Enjoy extra screen time for your favorite shows or games.',
    points: 60,
  },
];
