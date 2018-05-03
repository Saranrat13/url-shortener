const urls = [{
  originalURL: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
  shortenedURL: 'css-grid'
}, {
  originalURL: 'https://pixabay.com/en/users/Free-Photos-242387/',
  shortenedURL: 'free-photos'
}, {
  originalURL: 'http://colorpalettes.net/',
  shortenedURL: 'color'
}]


const renderurls = function (urls) {

  document.querySelector('#shortened-url-lists').innerHTML = ''


  const summary = document.createElement ('h3')
    summary.textContent = 'Shortened version of our favorite URL'
    document.querySelector('#shortened-url-lists').appendChild(summary)

  urls.forEach(function (url) {
    const newURL = document.createElement('p')
    newURL.textContent = url.shortenedURL
    document.querySelector('#shortened-url-lists').appendChild(newURL)
  })
}

renderurls(urls)

//===================================
document.querySelector('#form').addEventListener('submit', function (e) {
  //listen to submit --> when the form is submited --> do something
  e.preventDefault()
  urls.push({ // push the data onto the array
    shortenedURL: e.target.elements.shortenedURL.value
  })

  renderurls(urls)
  e.target.elements.originalURL.value = ''
  e.target.elements.shortenedURL.value = ''

  })
