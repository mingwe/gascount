import {combineReducers} from 'redux';
import MileageReducers from './mileagehistory';


const allReducers = combineReducers({
   mileage: MileageReducers
});


export default allReducers;