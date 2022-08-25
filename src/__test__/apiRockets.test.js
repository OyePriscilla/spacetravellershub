import rocketsReducer from '../redux/rockets/rockets';

test('API pending', () => {
  const state = rocketsReducer({ rocket: [], mission: [] }, { type: 'spacetravellers/missions/LOADMISSION/pending', meta: { requestId: 'S9KnZ6g-yNCiL3WRyelRk', requestStatus: 'pending' } });
  expect(state).toEqual({ rocket: [], mission: [] });
});
