//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// router.post('other-data-answer', function(request, response) {

//     var otherDataSources = request.session.data['otherDataSources']
//     if (otherDataSources == "yes"){
//         response.redirect("other-data-sources")
//     } else {
//         response.redirect("homepage")
//     }
// })