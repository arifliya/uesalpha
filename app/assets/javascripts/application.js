//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


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


$( document ).ready(function() {
    $(".con-fuz").hide();
    $(".con-str").hide();

    $("#match-settings").change(function(){
        if($(this).val()=='Fuzzy'){ 
            $(".con").hide();
            $(".con-fuz").show();   
        }
        if($(this).val()=='Strict'){ 
            $(".con").hide();
            $(".con-str").show();   
        }
         if($(this).val()=='Recommended'){ 
            $(".con").hide();
            $(".con-rec").show();   
        }
    });
});


$('#addDataSources').click(function(e) {
    
    if (!$('#choose-data').val()) {
        return false;
    } else {

    var array = $('#choose-data').val().split(",");

    $.each(array,function(i){
        $('.tags').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"> X</span> </a>');
        // $('#dataToHighlightHidden').val($('#choose-data').val());
        $('#dataToHighlightHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#choose-data').val('');
    $( "ul#choose-data__listbox li" ).first().trigger( "click" );
    $('#choose-data').blur();
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
        // alert(this);
        $(this).remove();
        // $('#dataToHighlightHidden').val('');
        // $('#dataToHighlightHidden').val(function(i,val) { 
        //     return val + (!val ? '' : ', ') + array[i] ;
        // });
        // if ($('#dataToHighlightHidden').has(array)) {
        //     $(array).remove();
        // }
        event.preventDefault();
    });   

});

 $(".close-button").on('click', function (e) {
    // let array = $('#dataToHighlightHidden').val().split(", ");
    
    // const t = (this.id);           

    // array.splice(1,2)

    // // alert(array)

    $(this).remove();
    e.preventDefault();
}); 

$('#removeAllDataSources').click(function() {
    $('.tags a').remove()
})

$('#addAllDataSources').click(function() {
    $('.tags').append('\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="BRP">BRP<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="CID">CID<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="CRS">CRS<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="DNB">DNB<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="GBD">GBD<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IABS">IABS<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="PCDP">PCDP<span class="close-icon"> X</span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="WPD">WPD<span class="close-icon"> X</span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
})


$('#addContactDetails').click(function(e) {
    
    if (!$('#contact-data').val()) {
        return false;
    } else {

    var array = $('#contact-data').val().split(",");

    $.each(array,function(i){
        $('.tagsContact').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"> X</span> </a>');
       
        $('#contactDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#contact-data').val('');
    $( "ul#contact-data__listbox li" ).first().trigger( "click" );
    $('#contact-data').blur();
   
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });   

});

$('#addWhereaboutsDetails').click(function(e) {
    
    if (!$('#whereabouts-data').val()) {
        return false;
    } else {

    var array = $('#whereabouts-data').val().split(",");

    $.each(array,function(i){
        $('.tagsWhereabouts').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"> X</span> </a>');
       
        $('#whereaboutsDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#whereabouts-data').val('');
    $( "ul#whereabouts-data__listbox li" ).first().trigger( "click" );
    $('#whereabouts-data').blur();

    e.preventDefault();

    }

    $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });   

});

$('#addImmigrationDetails').click(function(e) {
    
    if (!$('#immigration-data').val()) {
        return false;
    } else {

    var array = $('#immigration-data').val().split(",");

    $.each(array,function(i){
        $('.tagsImmigration').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"> X</span> </a>');
       
        $('#immigrationDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#immigration-data').val('');
    $( "ul#immigration-data__listbox li" ).first().trigger( "click" );
    $('#immigration-data').blur();
   
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });   

});

$('#addTravelDetails').click(function(e) {
    
    if (!$('#travel-data').val()) {
        return false;
    } else {

    var array = $('#travel-data').val().split(",");

    $.each(array,function(i){
        $('.tagsTravel').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"> X</span> </a>');
       
        $('#travelDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

   
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
       
        $(this).remove();
        
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


$('#saveContinue').click(function() {
    if (window.location.href.indexOf("#people") > -1) {
        $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    }
    if (window.location.href.indexOf("#contact") > -1) {
        $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    }
})

$('#advancedOptions').click(function() {
    if (window.location.href.indexOf("#people") > -1) {
        $('#formId2').attr('action', 'advanced-options#people');
    }
    if (window.location.href.indexOf("#contact") > -1) {
        $('#formId2').attr('action', 'advanced-options#contact');
    }
})


if (window.location.href.indexOf("#people") > -1) {
    // alert("found people");
    $('#breadCrumb-ID').text('People');
    $('#formId').attr('action', 'what-do-you-want-displayed#people');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    $('#formId3').attr('action', 'check-settings-all-users-submit#people');
    $('#typeOfSearch').text('People');
}

if (window.location.href.indexOf("#contact") > -1) {
    // alert("found contact");
    $('#breadCrumb-ID').text('Contact numbers');
    $('#formId').attr('action', 'what-do-you-want-displayed#contact');
    // $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    $('#formId3').attr('action', 'check-settings-all-users-submit#contact');
    $('#typeOfSearch').text('Contact numbers');
}



// setTimeout(
//   function() 
//   {
//     //do something special
  

// $(document).ready(function(){
//     $('#inProgressBanner').removeClass('govuk-visually-hidden');
// });

// }, 5000);


// $(function() {
    
//     setTimeout(function() {
        
//     }, 5000);
// });


$(function() {
    $('#inProgressBanner').removeClass('govuk-visually-hidden');
    setTimeout(function() {
        $('#inProgressBanner').addClass('govuk-visually-hidden');
        $('#inProgressTag').text('Completed');
        $('#inProgressTag').removeClass('govuk-tag--blue');
        $('#inProgressTag').addClass('govuk-tag--green');
        $('#completedBanner').show();
        $('#changeViewDetailsURL').attr('href', 'details-completed.html');
    }, 10000);
});


