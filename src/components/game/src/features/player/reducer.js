// deal with state for player component
// reducers map state to props and map dispatch to props
// so whatever state is in the reducer will actually get mapped to the props
// of the component.
// so instead of having to get the state out of the redux store
// all we have to do is (props. whatever the key is we are trying to get)

const initialState = {
  position: [0, 0],
  spriteLocation: "0px 0px",
  direction: "east",
  walkIndex: 0
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload // this carries the position key sent from movement.js
      }; // using store.dispatch()
    default:
      return state;
  }
};

export default playerReducer;
