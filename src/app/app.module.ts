import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { combineReducers } from 'redux';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { Reducer1, Reducer2 } from './store/app.reducer';
import { IAppState, INITIAL_STATE } from './store/IAppState';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    store: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    store.configureStore(
      combineReducers<IAppState>(
        {
        Apprentice: Reducer1,
        Program: Reducer2
      }),
      INITIAL_STATE,
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
 }
