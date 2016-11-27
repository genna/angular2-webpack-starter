import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { BlogModule } from './blog/blog.module';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState, rootReducer } from './app.reducer';
import createLogger = require('redux-logger');

// Application wide providers
const APP_PROVIDERS = [
	...APP_RESOLVER_PROVIDERS,
	AppState
];

type StoreType = {
	state: InternalStateType,
	restoreInputValues: () => void,
	disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HomeComponent,
		NoContentComponent
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
		BlogModule,
		NgReduxModule.forRoot()
	],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		APP_PROVIDERS
	]
})
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, <IAppState>{}, [ createLogger() ]);
	}
}

