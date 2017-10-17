export interface IAppState {
  Apprentice: IApprenticeState;
  Program: IProgramState;
}

export interface IApprenticeState {
  ApprenticeId?: number;
}


export interface IProgramState {
  ProgramId?: number;
}

export const INITIAL_STATE: IAppState = {
  Apprentice: { ApprenticeId: 0} ,
  Program: { ProgramId: 0}
};
