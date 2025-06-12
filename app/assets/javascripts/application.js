//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// window.GOVUKPrototypeKit.documentReady(() => {
//   // Add JavaScript here
// })

// var chkd=true; 
// $('#selectAll').click(function(event) {  
     
//      $(":checkbox").prop("checked",chkd);
//     chkd=!chkd;
//            });

var checked=true; 
$('#selectAll').click(function(event) {  
     $(".details-to-display-checkboxes:checkbox").prop("checked",checked);
    checked=!checked;
    event.preventDefault();
});


$('#addTerms').click(function(e) {
    // var bla = $("#termsToHighlight").val();
    

    var array = $('#termsToHighlight').val().split(",");

    // var array2 = $('#termsToHighlight');

    $.each(array,function(i){
        // alert(array[i]);
        $('.tags').append('<a href="#" class="close-button">' + array[i] + '<span class="close-icon"> X</span> </a>');
        $('#termsToHighlightHidden').val($('#termsToHighlight').val());
    });

    

    $('#termsToHighlight').val("");
    // $('.tag').append(' <b>' + array + '</b>');
    e.preventDefault();

    $('.close-button').click(function(event) {
        // alert(this);
        $(this).hide();
        event.preventDefault();
    });
});

