document.addEventListener('DOMContentLoaded', () => {
// grab the data from the popup that we want
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const input = document.getElementById('text')
    let text = input.value
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      //console.log(JSON.stringify(tabs))
      chrome.tabs.sendMessage(tabs[0].id, {data: text})
    })
  })
})

// send this data to the main.js using .sendMessage
