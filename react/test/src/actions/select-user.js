export const selectUser = (user) => {                 // action creator
  console.log(`you clicked user ${user.first}`);
  return({  // The real action
    type: 'USER_SELECTED',
    payload: user,
  });
};