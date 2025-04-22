import { configureStore } from "@reduxjs/toolkit";
import { dummyJsonApiService } from "./dummyJsonDataQuery";

const store = configureStore({
  reducer: {
    [dummyJsonApiService.reducerPath] : dummyJsonApiService.reducer
  },
  middleware: (gDM) => gDM().concat(dummyJsonApiService.middleware),
});

export default store;
