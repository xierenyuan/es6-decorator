export default class AppCtrl {
    constructor($scope) {
        'ngInject';
        $scope.scopeTitle = '我是作用域上的title';
        this.title = '我是title';
    }
};