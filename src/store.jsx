// store.js
import { createStore } from 'redux';

// Définir l'action
const SELECT_SQUARE = 'SELECT_SQUARE';

// Créer une action creator
export const selectSquare = id => ({
  type: SELECT_SQUARE,
  payload: id,
});

// Définir le reducer initial
const initialState = {
  selectedId: null,
};

// Créer le reducer
function squaresReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SQUARE:
      return { ...state, selectedId: action.payload };
    default:
      return state;
  }
}

// Créer le store
const store = createStore(squaresReducer);

export default store;
