export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "34.0.49.250:5005";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
