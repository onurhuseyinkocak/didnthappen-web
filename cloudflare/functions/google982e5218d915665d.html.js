// Pages strips ".html" with a 308; Search Console needs the exact path to return 200.
export function onRequest() {
  return new Response("google-site-verification: google982e5218d915665d.html", {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
