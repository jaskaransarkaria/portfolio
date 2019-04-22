// deal with state for player component
// reducers map state to props and map dispatch to props
// so whatever state is in the reducer will actually get mapped to the props
// of the component.
// so instead of having to get the state out of the redux store
// all we have to do is (props. whatever the key is we are trying to get)

const initialState = {
  tiles: []
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default mapReducer;
