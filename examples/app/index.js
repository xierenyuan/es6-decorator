import 'angular';
import uiRouter from 'angular-ui-router';
import { Bootstrap, NgModule, Inject, Injector } from 'src/lib';
import { Require } from 'src/util';
import AppCtrl from './app.controller';

@NgModule({
    name: 'rrc',
    require: [uiRouter]
})
class AppModule {
    @Inject(['$stateProvider', '$urlRouterProvider'])
    config($stateProvider, $urlRouterProvider) {
        // 路由    
        $stateProvider.state('app', {
            url: '/app',
            //依赖加载 模板
            templateProvider: Require((resolve) => {
                require.ensure([], () => resolve(require('./app.html')));
            }),
            controller: AppCtrl,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise("/app");
    }

    @Injector('$timeout')
    run($timeout) {
        $timeout(() => {
            console.log('run $timeout 100ms 后执行');
        }, 100);
    }
}

Bootstrap(AppModule);