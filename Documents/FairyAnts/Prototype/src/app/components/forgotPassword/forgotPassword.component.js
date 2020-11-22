class ForgotPasswordComponent {
    constructor() {

    }

    init() {
        $('.button-loggin').click(function(){
            routeapp('login');
        }); 
    }
}
window.loadComponent(ForgotPasswordComponent);