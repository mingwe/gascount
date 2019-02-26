import {combineReducers} from 'redux';
import MileageReducers from './history';
import ActiveEvent from './event-active';

const allReducers = combineReducers({
   mileage: MileageReducers,
   active: ActiveEvent,
});


export default allReducers;