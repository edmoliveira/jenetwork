class LoginComponent {
    constructor() {

    }

    init() {
        $('.button-loggin').click(function(){
            window.goHomeUserLogged();
        });
    }
}
window.loadComponent(LoginComponent);