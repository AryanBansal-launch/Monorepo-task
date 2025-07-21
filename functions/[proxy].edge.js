
export default function handler(request) {
  let domain = process.env.NEXT_PUBLIC_DOMAIN;
  if(domain == 'monorepo-task-web.devcontentstackapps.com'){
    console.log('Web domain detected:', domain);
    const parsedUrl = new URL(request.url);
    const route = parsedUrl.pathname;
    if (route === '/edge') {
      console.log('Web domain - /edge route hit');
      const response = {
        time: new Date(),
        domain: domain,
        route: route
      }
      return new Response(JSON.stringify(response))
    }
    console.log('Web domain - fetching request');
    return fetch(request)
  }
  else if(domain == 'monorepo-task-docs.devcontentstackapps.com'){
    console.log('Docs domain detected:', domain);
    const parsedUrl = new URL(request.url);
    const route = parsedUrl.pathname;
    if (route === '/edge') {
      console.log('Docs domain - /edge route hit');
      const response = {
        time: new Date(),
        domain: domain,
        route: route
      }
      return new Response(JSON.stringify(response))
    }
    console.log('Docs domain - no matching route');
  }
   }