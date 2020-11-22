let userLogged = false;

(function(){
    const $container = $('.router-outlet-index');

    window.routeapp = (url) => {
        $.ajax('rotes/' + url).done(function(data) {
            $container.html(data); 
            $('.script-page-load').remove();
        });
    };

    window.loadComponent = cl => {
        new cl().init();
    };

    window.goHomeUserLogged = () => {
        userLogged = true;
        $('.user-logged').show();
        routeapp('home');
    }
    
    if(window.location.href.indexOf('new-pass') > -1){
        routeapp('newPassword');
    }
    else {
        if(!userLogged){
            $('.user-logged').hide();
            routeapp('login');
        }
        else {
            routeapp('home');
        }
    }
})();

