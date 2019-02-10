import {combineReducers} from 'redux';
import MileageReducers from './mileagehistory';
import ActiveEvent from './mileageevent-active';

const allReducers = combineReducers({
   mileage: MileageReducers,
   active: ActiveEvent
});


export default allReducers;