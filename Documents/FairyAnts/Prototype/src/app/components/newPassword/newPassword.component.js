class NewPasswordComponent {
    constructor() {
        window.history.pushState('', '', '/');
    }

    init() {
        $('.button-loggin').click(function(){
            routeapp('login');
        });
    }
}
window.loadComponent(NewPasswordComponent);