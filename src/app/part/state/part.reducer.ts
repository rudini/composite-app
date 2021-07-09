
import { PartActions, PartActionTypes } from './part.actions';

export const partFeatureKey = 'part';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PartActions): State {
  switch (action.type) {

    case PartActionTypes.LoadParts:
      return state;

    default:
      return state;
  }
}
