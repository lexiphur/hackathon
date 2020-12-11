//grab the document header and p tags with getElementsByTagName => an array of all elements with those tags
//iterate thorugh the array and change all text using
//.innerText to change all the text on the webpage

//have a form tag to allow submissions of text to replace the above mentioned tags
//const pElem = document.getElementsByTagName('p');




const codeElem = document.getElementsByTagName('code');
for (let i = 0; i < codeElem.length; i++){
  codeElem[i].innerText = '';
}

const daveFace = document.createElement('img');
daveFace.setAttribute('src', 'https://codesmith.io/876620a5b0028d26162b6e7c142be182.jpg')


chrome.runtime.onMessage.addListener((req, res) => {

  let data = req.data;
  for (let i = 0; i < codeElem.length; i++){
    codeElem[i].innerText = data;
    } 
})




