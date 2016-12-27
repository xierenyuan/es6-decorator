import 'angular';
import uiRouter from 'angular-ui-router';
import { Bootstrap, NgModule, Inject } from './lib';

@NgModule({
    name: 'rrc',
    require: [uiRouter]
})
class AppModule {
    @Inject('$stateProvider', '$urlRouterProvider')
    config($stateProvider, $urlRouterProvider) {
        console.log('config init', $stateProvider);
        $stateProvider.state('app', {
            url: '/app',
            template: `<h1>233</h1>`
        });
        $urlRouterProvider.otherwise("/app");
    }

    @Inject('$timeout')
    run($timeout) {
        console.log('run init');
        $timeout(() => {
            console.log('run $timeout 100ms 后执行');
        }, 100);
    }
}

Bootstrap(AppModule);