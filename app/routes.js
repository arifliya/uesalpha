//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/data-source-answer', function(request, response) {

    var otherDataSources = request.session.data['other']
    if (otherDataSources == "yes"){
        response.redirect("alpha-tomato-10/other-data-sources")
    } else {
        response.redirect("alpha-tomato-10/check-settings-all-users")
    }
})



// router.post('/country-answer', function(request, response) {

//     var country = request.session.data['country']
//     if (country == "England"){
//         response.redirect("alpha-tomato-10/age.html")
//     } else {
//         response.redirect("alpha-tomato-10/ineligible-country")
//     }
// })