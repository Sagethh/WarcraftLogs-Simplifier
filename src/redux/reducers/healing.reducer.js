const healingReducer = (state = [], action) => { // reducer that holds our healing ranking info from the API cal;
   switch (action.type) {
      case "POST_HEALING":
         //console.log('data is:', action.payload.rankings.data); // test function
         let fights = action.payload;
         //console.log('Kills are:', fightsToReturn); // test function
         //console.log('All fights are:', fights); // test function
         return fights;
      default:
         return state;
   };
};

export default healingReducer;