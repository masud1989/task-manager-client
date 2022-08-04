import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from '../state-slice/settingsSlice';
import taskReducer from '../state-slice/taskSlice';
import summeryReducer from '../state-slice/summarySlice';

export default configureStore ({
    reducer:{
        settings:settingsReducer,
        task:taskReducer,
        summery:summeryReducer
    }
})
