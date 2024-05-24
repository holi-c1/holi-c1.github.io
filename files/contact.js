
function checkNumberOnly(e) {
    -1!==$.inArray(e.keyCode,[46,8,9,27,13,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()
}


/*
 * Form Validation
 */
 
$("#myFormBonus").submit(function(event) {
        var name = $('#name').val();
        if (!name) {
            event.preventDefault();
            $('.errorName').html('kullanıcı Adınızı gerekli');
        }else{
            $('.errorName').html('');
        }

        var phone = $('#phone').val();
        if (!phone) {
            event.preventDefault();
            $('.errorPhone').html('İletişim Numarası gereklidir');
        }else{
            $('.errorPhone').html('');
        }

        var description = $('#description').val();
        if (!description) {
            event.preventDefault();
            $('.errorDiscription').html('Hatanın Açıklaması gereklidir');
        }else{
            $('.errorDiscription').html('');
        }

        var image = $('#image').val();
        if (!image) {
            event.preventDefault();
            $('.errorImage').html('Dosya Yükle gereklidir');
        }else{
            $('.errorImage').html('');
        }
        
        if (name && phone && description && image) {
            $("#submit").attr("disabled", true);
        }
});


function checkFile(e) {
    // debugger;
    var ext = $(e).val().split('.').pop(); 
    if(ext == 'png' || ext == 'jpg' || ext == 'JPG' || ext == 'JPEG' || ext == 'jpeg' || ext == 'PNG'){
        return true;    
    }
    else{
        $(e).val("");
        alert('Please Select JPG | PNG File');
    }
}

$('input#image').on('change', function(){
    var files = $(this)[0].files;
    $('#image_count').text("Seçilen toplam resim: "+files.length);
});