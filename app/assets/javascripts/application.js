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