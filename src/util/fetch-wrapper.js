import logError from './logger';

// Wrapper over fetch api .
export default async function customFetch(url, body) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const requestOptions = {
    method: body ? 'POST' : 'GET',
    headers: headers,
    cache: 'no-cache'
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const request = new Request(url, requestOptions);
  let json = {}, response;

  try {
    response = await fetch(request);

    if (!response.ok) {
      // Note this error is thrown when status is not between 200 and 299.
      // So it will be thrown for 4xx errors as well which is not correct technically.
      throw new Error(`${response.status}: Network response was not ok.`)
    }

    json = await response.json();

  } catch (error) {
    // Network failure or request was aborted by the browser.
    logError('Error:', error);
  }

  return json;
}
