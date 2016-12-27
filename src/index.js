import { Bootstrap, NgModule } from './lib';

@NgModule({
    name: 'rrc'
})
class AppModule {
    config() {
        console.log('config init');
    }

    run() {
        console.log('run init');
    }
}

Bootstrap(AppModule);