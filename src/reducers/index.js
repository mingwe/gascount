import {combineReducers} from 'redux';
import MileageReducers from './mileagehistory';
import ActiveEvent from './mileageevent-active';
// import MileageModify from './mileage-modify';

const allReducers = combineReducers({
   mileage: MileageReducers,
   active: ActiveEvent,
});


export default allReducers;