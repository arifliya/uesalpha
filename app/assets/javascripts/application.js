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
        $('.tags').append('<a href="#" style="color:white" class="close-button">' + array[i] + '<span class="close-icon"></span> </a>');
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


// $( document ).ready(function() {
//     $(".con-fuz").hide();
//     $(".con-str").hide();

//     $("#match-settings").change(function(){
//         if($(this).val()=='Fuzzy'){ 
//             $(".con").hide();
//             $(".con-fuz").show();   
//         }
//         if($(this).val()=='Strict'){ 
//             $(".con").hide();
//             $(".con-str").show();   
//         }
//          if($(this).val()=='Recommended'){ 
//             $(".con").hide();
//             $(".con-rec").show();   
//         }
//     });
// });

$( document ).ready(function() {
    $(".con-fuz").hide();
    $(".con-str").hide();

    $("#match-settings input").change(function(){
        if($(this).val()=='Broad matching'){ 
            $(".con").hide();
            $(".con-fuz").show();   
        }
        if($(this).val()=='Strict matching'){ 
            $(".con").hide();
            $(".con-str").show();   
        }
         if($(this).val()=='Recommended matching'){ 
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
        $('.tags').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        // $('#dataToHighlightHidden').val($('#choose-data').val());
        $('#noDataSources').hide();
        $('#dataToHighlightHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#choose-data').val('');
    $('ul#choose-data__listbox li' ).first().trigger( "click" );
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

$('#removeAllDataSources').click(function(e) {
    $('.tags a').remove();
    $('#noDataSources').show();
    e.preventDefault();
})

$('#addAllDataSources').click(function(e) {
    $('#noDataSources').hide();
    $('.tags').append('\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="BRP">BRP<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="CID">CID<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="CRS">CRS<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="DNB">DNB<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="GBD">GBD<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IABS">IABS<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="PCDP">PCDP<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="WPD">WPD<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
    e.preventDefault();
})


$('#removeAllContactDetails').click(function(e) {
    $('.tagsContact a').remove();
    $('#noContactData').show();
    e.preventDefault();
})

$('#addAllContactDetails').click(function(e) {
    $('#noContactData').hide();
    $('.tagsContact').append('\
             <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="All known contact details">All known contact details<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known phone">Last known phone<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known email">Last known email<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();

        if ($(".tagsContact a").is(":visible")) {
            $('#noContactData').hide();
        } else {
        $('#noContactData').show();
        }
        
        event.preventDefault();
    });
    e.preventDefault();
})


$('#removeAllWhereaboutsDetails').click(function(e) {
    $('.tagsWhereabouts a').remove();
    $('#noLocationData').show();
    e.preventDefault();
})

$('#addAllWhereaboutsDetails').click(function(e) {
    $('#noLocationData').hide();
    $('.tagsWhereabouts').append('\
             <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="All known addresses">All known addresses<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known address">Last known address<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known address ICE">Last known address ICE region<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
    e.preventDefault();
})


$('#removeAllImmigrationDetails').click(function(e) {
    $('#noImmigrationData').show();
    $('.tagsImmigration a').remove();
    e.preventDefault();
})

$('#addAllImmigrationDetails').click(function(e) {
    $('#noImmigrationData').hide();
    $('.tagsImmigration').append('\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Case date">Case date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Case type">Case type<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Outcome">Outcome<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Outcome date">Outcome date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Expiry date">Expiry date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Leave conditions">Leave conditions<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Work restrictions">Work restrictions<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Source">Source<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Case ID">Case ID<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last know immigration details">Last know immigration details<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known leave expiry date">Last known leave expiry date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known immigration harm rating">Last known immigration harm rating<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Immigration detention">Immigration detention<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Removal details">Removal details<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Special conditions">Special conditions<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Reporting status">Reporting status<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="DO history">DO history<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="DO breach flag">DO breach flag<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Removability">Removability<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
    e.preventDefault();
})

$('#removeAllIntelDetails').click(function(e) {
    $('.tagsIntel a').remove();
    $('#noIntelData').hide();
    e.preventDefault();
})

$('#addAllIntelDetails').click(function(e) {
    $('#noIntelData').show();
    $('.tagsIntel').append('\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS">IMS<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP">SIP<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="NOD">NOD<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP Report ID">SIP Report ID<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP Report date">SIP Report date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP Report title">SIP Report title<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP Report category">SIP Report category<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="SIP Report detail">SIP Report detail<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS Report ID">IMS Report ID<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS Report date">IMS Report date<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS Report title">IMS Report title<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS Report category">IMS Report category<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="IMS Report detail">IMS Report detail<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
    e.preventDefault();
})


$('#removeAllTravelDetails').click(function(e) {
    $('.tagsTravel a').remove();
    $('#noTravelData').show();
    e.preventDefault();
})

$('#addAllTravelDetails').click(function(e) {
    $('#noTravelData').hide();
    $('.tagsTravel').append('\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Origin country">Origin country<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Last known travel details">Last known travel details<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Flight code">Flight code<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Destination country">Destination country<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Location code">Location code<span class="close-icon"></span> </a>\
            <a href="#" style="color:white" class="close-button" name="dataTypeNew" id="Location description">Location description<span class="close-icon"></span> </a>\
        ')

        $('.close-button').click(function(event) {
       
        $(this).remove();
        
        event.preventDefault();
    });
    e.preventDefault();
})


$('#addContactDetails').click(function(e) {
    
    if (!$('#contact-data').val()) {
        return false;
    } else {

    var array = $('#contact-data').val().split(",");

    $.each(array,function(i){
        $('.tagsContact').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        $('#noContactData').hide();
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

         if ($(".tagsContact a").is(":visible")) {
            $('#noContactData').hide();
        } else {
        $('#noContactData').show();
        }
        
        
        event.preventDefault();
    });   

});

if ($(".tagsContact a").is(":visible")) {
    $('#noContactData').hide();
} else {
$('#noContactData').show();
}


$('#addWhereaboutsDetails').click(function(e) {
    
    if (!$('#whereabouts-data').val()) {
        return false;
    } else {

    var array = $('#whereabouts-data').val().split(",");

    $.each(array,function(i){
        $('.tagsWhereabouts').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        $('#noLocationData').hide();
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
        $('.tagsImmigration').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        $('#noImmigrationData').hide();
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


$('#addIntelDetails').click(function(e) {
    
    if (!$('#intel-data').val()) {
        return false;
    } else {

    var array = $('#intel-data').val().split(",");

    $.each(array,function(i){
        $('.tagsIntel').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        $('#noIntelData').hide();
        $('#intelDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#intel-data').val('');
    $( "ul#intel-data__listbox li" ).first().trigger( "click" );
    $('#intel-data').blur();
   
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
        $('.tagsTravel').append('<a href="#" style="color:white" class="close-button" name="dataTypeNew" value="' + array[i] + '">' + array[i] + '<span class="close-icon"></span> </a>');
        $('#noTravelData').hide();
        $('#travelDataHidden').val(function(i,val) { 
            return val + (!val ? '' : ', ') + array[i] ;
        });
    });

    $('#travel-data').val('');
    $( "ul#travel-data__listbox li" ).first().trigger( "click" );
    $('#travel-data').blur();
   
    e.preventDefault();

    }

    $('.close-button').click(function(event) {
       
        $(this).remove();

        event.preventDefault();
    });   

});

$('.close-button').click(function(event) {
       
        $(this).remove();
        
        if ($(".tagsContact a").is(":visible")) {
            $('#noContactData').hide();
        } else {
        $('#noContactData').show();
        }

 event.preventDefault();

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
    $('#formId2').attr('action', 'check-settings-all-users-submit');
    // if (window.location.href.indexOf("#people") > -1) {
    //     $('#formId2').attr('action', 'check-settings-all-users-submit#people');
    // }
    // if (window.location.href.indexOf("#contact") > -1) {
    //     $('#formId2').attr('action', 'check-settings-all-users-submit#contact');
    // }
})

$('#saveContinue2').click(function() {
    $('#formId2').attr('action', 'filter-download');
})

$('#advancedOptions').click(function() {
    $('#formId2').attr('action', 'advanced-options');
    // if (window.location.href.indexOf("#people") > -1) {
    //     $('#formId2').attr('action', 'advanced-options#people');
    // }
    // if (window.location.href.indexOf("#contact") > -1) {
    //     $('#formId2').attr('action', 'advanced-options#contact');
    // }
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

// if ($('#whatFiltersToShow').indexOf('Contact details')) {
//     alert('has contact');
// }

if ($('#whatFiltersToShow:contains("Contact")').length > 0) {
     $('.contact-group').show()
     $('#contactCheckAnswersAdvanced').show()
} else {
    $('.contact-group').hide()
    $('#contactCheckAnswersAdvanced').hide()
}

if ($('#whatFiltersToShow:contains("Location")').length > 0) {
    $('.whereabouts-group').show()
    $('#locationCheckAnswersAdvanced').show()
} else {
    $('.whereabouts-group').hide()
    $('#locationCheckAnswersAdvanced').hide()
}

if ($('#whatFiltersToShow:contains("Immigration")').length > 0) {
     $('.immigration-group').show()
     $('#immigrationCheckAnswersAdvanced').show()
} else {
    $('.immigration-group').hide()
    $('#immigrationCheckAnswersAdvanced').hide()
}

if ($('#whatFiltersToShow:contains("Intelligence")').length > 0) {
     $('.intel-group').show()
     $('#intelCheckAnswersAdvanced').show()
} else {
    $('.intel-group').hide()
    $('#intelCheckAnswersAdvanced').hide()
}

if ($('#whatFiltersToShow:contains("Travel")').length > 0) {
     $('.travel-group').show()
     $('#travelCheckAnswersAdvanced').show()
} else {
    $('.travel-group').hide()
    $('#travelCheckAnswersAdvanced').hide()
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


