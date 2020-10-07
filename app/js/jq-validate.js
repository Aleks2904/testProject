$(document).ready(function(){
    $('#js-claim-form').each(function(){
        $(this).validate({
            errorPlacement(error, element){
                return true;
            },
            focusInvalide: false,
            rules: {
                name: {
                    required: true,
                },
                consentCheck: {
                    required: true,
                }
            }
        })
    })
})