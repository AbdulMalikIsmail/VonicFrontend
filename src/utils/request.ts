/**
 * Parses the JSON returned for any errors
 *
 * @param  {object} JSONresponse A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
 function checkForError(JSONresponse) {
    if (JSONresponse && JSONresponse.message &&  JSONresponse.message.error){
      const error = new Error(JSONresponse.message.error);
      throw error;
    }
    return JSONresponse;
  }
  
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */
  function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }
  
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    if(response.status === 403){
      const error = new Error("Session Expired")
      // error.response =  response;
      throw error;
    }
  
    const error = new Error(response.statusText);
    // error.response = response;
    throw error;
  }
  
  /**
  * Timeout function
  * @param {Integer} time (miliseconds)
  * @param {Promise} promise
  */
  const timeout = (time, promise) => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        reject(new Error('Request timed out.'))
      }, time);
       promise.then(resolve, reject);
    });
  }
  
  // Create an instance.
  const controller = new AbortController();
  const signal = controller.signal;
  
  /**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   *
   * @return {object}           The response data
   */
  
  var path = 'https://rickandmortyapi.com/api'
  var path = ''
  var TIMEOUT_IN_MILLISECONDS = 120000
  export default function request(url, options) {
    // return fetch(path + url, options)
    //   .then(checkStatus)
    //   .then(parseJSON)
    //   .then(checkForError);
  
      return timeout(TIMEOUT_IN_MILLISECONDS , fetch(path + url, {...options, signal: signal })
      .then(checkStatus)
      .then(parseJSON)
      .then(checkForError))
  }
  