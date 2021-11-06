import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = [
  {
    id: 1,
    title: 'Control Systems',
    category: 'Robotics',
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    category: 'Deep Learning',
  },
];

const store = createStore(rootReducer, initialState);

export default store;
