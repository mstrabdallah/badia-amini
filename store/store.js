import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
//
import loginSlice from './slices/auth/loginSlice'
import authSlice from './slices/auth/authSlice';
import registerSlice from './slices/auth/registerSlice';
import identitySlices from './slices/identity/identitySlices'
import addDocumentsSlice from './slices/documents/addDocumentsSlice'
import carsSlice from './slices/cars/carsSlice'

import identitiesSlice from "./slices/identities/identitiesSlice";
import editCarSlice from "./slices/cars/editSlice";
import docsSlice from "./slices/purchdocs/purchdocsSlice";

import indexSlice from './slices/index/indexSlice';

const makeStore = () => configureStore({
    reducer: {
        auth: authSlice,
        login: loginSlice,
        register: registerSlice,
        identity: identitySlices,
        addDocuments: addDocumentsSlice,
        cars: carsSlice,
        identities: identitiesSlice,
        editcar: editCarSlice,
        docs: docsSlice,
        index: indexSlice

    },
    devTools: false
});
export const wrapper = createWrapper(makeStore);


  
// export const store = configureStore({
//     reducer: {
//         auth: authSlice,
//         login: loginSlice,
//         register: registerSlice,
//         identity: identitySlices,
//         addDocuments: addDocumentsSlice,
//         cars: carsSlice,
//         identities: identitiesSlice,
//         editcar: editCarSlice,
//         docs: docsSlice,
//         index: indexSlice
//     },
// })

