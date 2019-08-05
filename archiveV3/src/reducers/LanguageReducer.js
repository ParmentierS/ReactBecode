export default function(state = 'fr', action) {
  switch (action.type) {
    case 'LANGUAGE_CHANGED' :
      return action.payload;
  }

  return state;
}