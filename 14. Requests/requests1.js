// REQUESTS


// 1. HTTP Requests
//ex.
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');
// 'run last' message will remain last if 2500s change to 0s.



// 2. XHR GET Requests I =====================================
// XHR GET Diagram - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+GET+diagram.svg



// 3. XHR GET Requests II =====================================
// ex.
// We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request.
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response
}
};

xhr.open('GET', url);
xhr.send();



// 4. XHR GET Requests III =====================================
// ex.
// Information to reach API
const url = 'https://api.datamuse.com/words?';

const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;
   const endpoint = `${url}${queryParams}${wordQuery}`;

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
  };

  xhr.open('GET', endpoint);
  xhr.send();

};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);



// 5. XHR GET Requests IV ====================================
// eg.
1. A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =. Examine the example below:
'https://api.datamuse.com/words?key=value'
2. If you want to add an additional parameter you will have to use the & character to separate your parameters. Like so:
'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'


// ex.
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);




// 6. XHR POST Requests I ================================
XHR POST Diagram [image saved] - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+POST+diagram.svg


// 7. XHR POST Requests II ==================================
// boilerplate code for an AJAX POST request using an XMLHttpRequest object.
// ex.
const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};

xhr.open('POST', url);
xhr.send(data);



// 8. XHR Post Requests III ===================================
// ex.
// Information to reach API
const apiKey = '460b3a1144af4409a7282b79f8667dc3';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest;

  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  };

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
};


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);




// 9. Review Requests I ======================================

JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript's asynchronous capabilities.

- There are many HTTP request methods, two of which are GET and POST.

- GET requests only request information from other sources.

- POST methods can introduce new information to other sources in addition to requesting it.

- GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

- POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

- Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

- To add a query string to a URL endpoint you can use ? and include a parameter.

- To provide additional parameters, use & and then include a key-value pair, joined by =.

- Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.

- Play around the with browser and code to make GET and POST requests. If you're going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!



// If you want to challenge yourself:

- Build shortenUrl() or getSuggestions() from scratch.

- Manipulate the object that is returned to display something different in the browser.

- Use a different API to make a GET or POST request.

- Create query strings to yield different results.
