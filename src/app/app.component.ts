import { Component } from '@angular/core';
import { select, dispatch, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './store/IAppState';
import { INCREAMENT_APPRENTICE_ID, INCREAMENT_PROGRAM_ID } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ApprenticeCounter: number;
  ProgramCounter: number;
  @select(['Apprentice', 'ApprenticeId']) readonly ApprenticeId$: Observable<number>;
  @select(['Program', 'ProgramId'] ) readonly ProgramId$: Observable<number>;

   constructor(private ngRedux: NgRedux<IAppState>) {
     this.ApprenticeCounter = 0;
     this.ProgramCounter = 0;
   }

  @dispatch() incrementApprenticeId() {
    this.ApprenticeCounter += 1;
    console.log(this.ApprenticeCounter);
    console.log(this.ngRedux.getState());
    return { type: INCREAMENT_APPRENTICE_ID, payload: { ApprenticeId: this.ApprenticeCounter} };
  }

  @dispatch() incrementProgramId() {
    this.ProgramCounter += 2;
    console.log(this.ProgramCounter);
    console.log(this.ngRedux.getState());
    return { type: INCREAMENT_PROGRAM_ID, payload: { ProgramId: this.ProgramCounter} };
  }
}
