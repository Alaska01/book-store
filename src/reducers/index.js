import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  book: [
    {
      id: 1,
      title: 'CSE',
      category: 'Robotics',
    },
    {
      id: 2,
      title: 'AIE',
      category: 'Deep Learning',
    },
    {
      id: 3,
      title: 'FTT',
      category: 'Learning',
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

export default store;
