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
    
    $(this).text(function(i, text){
        return text === "Unselect all" ? "Select all" : "Unselect all";
    })

     $(".details-to-display-checkboxes:checkbox").prop("checked",checked);
    checked=!checked;
    event.preventDefault();
});

var checked2=true; 
$('#selectAllDefault').click(function(event) {  

    $(this).text(function(i, text){
        return text === "Unselect all" ? "Select all" : "Unselect all";
    })
     $(".data-sources-checkboxes:checkbox").prop("checked",checked2);
    checked2=!checked2;
    event.preventDefault();
});

var checked3=true; 
$('#selectAllIntel').click(function(event) {  

    $(this).text(function(i, text){
        return text === "Unselect all" ? "Select all" : "Unselect all";
    })
     $(".intel-checkboxes:checkbox").prop("checked",checked3);
    checked3=!checked3;
    event.preventDefault();
});

var checked4=true; 
$('#selectAllLegacy').click(function(event) {  

    $(this).text(function(i, text){
        return text === "Unselect all" ? "Select all" : "Unselect all";
    })
     $(".legacy-checkboxes:checkbox").prop("checked",checked4);
    checked4=!checked4;
    event.preventDefault();
});



$('#addTerms').click(function(e) {
    
    if (!$('#termsToHighlight').val()) {
        return false;
    } else {

    var array = $('#termsToHighlight').val().split(",");

    $.each(array,function(i){
        $('.tags').append('<a href="#" style="color:white" class="close-button">' + array[i] + '<span class="close-icon"> X</span> </a>');
        $('#termsToHighlightHidden').val($('#termsToHighlight').val());
    });
    

    $('#termsToHighlight').val("");
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
        // alert(this);
        $(this).hide();
        event.preventDefault();
    });

    

});


$('#breadCrumb-ID-2').click(function() {    
    
   if (window.location.href.indexOf("#people") > -1) {
    // alert("found people");
    // $('#breadCrumb-ID').text('People');
    $(this).attr('href', 'upload-template.html#people');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    // $('#typeOfSearch').text('People');
}

if (window.location.href.indexOf("#contact") > -1) {
    // alert("found contact");
    // $('#breadCrumb-ID').text('Contact numbers');
    $(this).attr('href', 'upload-template.html#contact');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    // $('#typeOfSearch').text('Contact');
}
});

$('#breadCrumb-ID-3').click(function() {    
    
   if (window.location.href.indexOf("#people") > -1) {
    // alert("found people");
    // $('#breadCrumb-ID').text('People');
    $(this).attr('href', 'what-do-you-want-displayed.html#people');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    // $('#typeOfSearch').text('People');
}

if (window.location.href.indexOf("#contact") > -1) {
    // alert("found contact");
    // $('#breadCrumb-ID').text('Contact numbers');
    $(this).attr('href', 'what-do-you-want-displayed.html#contact');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    // $('#typeOfSearch').text('Contact');
}
});



if (window.location.href.indexOf("#people") > -1) {
    // alert("found people");
    $('#breadCrumb-ID').text('People');
    $('#formId').attr('action', 'what-do-you-want-displayed#people');
    $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    $('#typeOfSearch').text('People');
}

if (window.location.href.indexOf("#contact") > -1) {
    // alert("found contact");
    $('#breadCrumb-ID').text('Contact numbers');
    $('#formId').attr('action', 'what-do-you-want-displayed#contact');
    $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    $('#typeOfSearch').text('Contact');
}