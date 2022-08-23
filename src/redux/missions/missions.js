const LOADMISSION = 'spacetravellers/missions/LOADMISSION';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOADMISSION}/fulfilled`:
    default:
      return state;
  }
};
