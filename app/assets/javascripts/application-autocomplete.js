//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#choose-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})


window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#contact-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#whereabouts-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#immigration-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#intel-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#travel-data')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  showAllValues: true, dropdownArrow: () => '',
  displayMenu: 'overlay',
  source: (query, populateResults) => {
    const options = selectElement.querySelectorAll('option')
    let results = []

    options.forEach(
      (opt, i, list) => {
        let queryRegExp = new RegExp(query.trim(), 'i')
        let value = opt.getAttribute('value')
        let text = opt.innerText.trim()
        if (queryRegExp.test(value) || queryRegExp.test(text)) {
          results.push(text)
        }
      }
    )

    populateResults(results)
  },
  selectElement: selectElement
})
})


