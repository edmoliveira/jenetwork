class StudentClassComponent {
    constructor() {

    }

    init() {
        $('#grid').DataTable();

        $('.icon-add-panel-form').click(function(){
            $('.btn-success').show();
            $('.btn-warning').hide();
            $('.icon-add-panel-form').hide();
            $('.div-grid').hide('slow');
            $('.div-form').show('slow');            
        });

        $('.icon-search-panel-form').click(function(){
            $('.btn-success').hide();
            $('.btn-warning').hide();
            $('.icon-add-panel-form').hide();
            $('.div-grid').hide('slow');
            $('.div-form').show('slow');
        });   
        
        $('.icon-edit-panel-form').click(function(){
            $('.btn-success').hide();
            $('.btn-warning').show();
            $('.icon-add-panel-form').hide();
            $('.div-grid').hide('slow');
            $('.div-form').show('slow');
        }); 
        
        $('.btn-danger').click(function(){
            $('.btn-success').hide();
            $('.btn-warning').hide();
            $('.icon-add-panel-form').show();
            $('.div-grid').show('slow');
            $('.div-form').hide('slow');
        });         
    }
}
window.loadComponent(StudentClassComponent);