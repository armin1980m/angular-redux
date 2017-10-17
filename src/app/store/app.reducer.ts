import { Reducer } from 'redux';
import { IAppState, IProgramState, IApprenticeState } from '../store/IAppState';
import { FluxStandardAction } from 'flux-standard-action';
import { ApprenticeAction, ProgramAction, INCREAMENT_APPRENTICE_ID, INCREAMENT_PROGRAM_ID } from '../store/actions';
import {INITIAL_STATE} from '../store/IAppState';

export const Reducer1: Reducer<IApprenticeState>
  = (state: IApprenticeState= {ApprenticeId: 0}, action: FluxStandardAction<ApprenticeAction, null>) => {
    switch (action.type) {
      case 'INCREAMENT_APPRENTICE_ID':
      return { ...state, ApprenticeId: action.payload.ApprenticeId};
      default:
        return state;
    }
  };


  export const Reducer2: Reducer<IProgramState>
  = (state: IProgramState= {ProgramId: 0}, action: FluxStandardAction<ProgramAction, null>) => {
    switch (action.type) {
      case 'INCREAMENT_PROGRAM_ID':
      return { ...state, ProgramId : action.payload.ProgramId};
      default:
        return state;
    }
  };
