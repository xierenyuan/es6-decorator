import 'angular';
import uiRouter from 'angular-ui-router';
import { Bootstrap, NgModule, Inject } from './lib';

@NgModule({
    name: 'rrc',
    require: [uiRouter]
})
class AppModule {

    @Inject('$stateProvider')
    config($stateProvider) {
        console.log('config init', $stateProvider);
    }

    run() {
        console.log('run init');
    }
}

Bootstrap(AppModule);