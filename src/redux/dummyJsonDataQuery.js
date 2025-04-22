

import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../config/service";

export const dummyJsonApiService = createApi({
    reducerPath : "swapiApiService",
    baseQuery : axiosBaseQuery(),
    endpoints : (builder)=>({
        fetchPeoplesData : builder.query({
          query:(page)=>({
            url : `/products?limit=15&skip=${page}`,
            method : "GET"
          })
        })
    })
    
})

export const {useFetchPeoplesDataQuery} = dummyJsonApiService

