// export default function handler(request,context) {
//   let domain = context.env.NEXT_PUBLIC_DOMAIN;
//   console.log('Domain detected:', domain);
//   if(domain == 'monorepo-task-web.devcontentstackapps.com'){
//     console.log('Web domain detected:', domain);
//     const parsedUrl = new URL(request.url);
//     const route = parsedUrl.pathname;
//     if (route === '/edge') {
//       console.log('Web domain - /edge route hit');
//       const response = {
//         time: new Date(),
//         domain: domain,
//         route: route
//       }
//       return new Response(JSON.stringify(response))
//     }
//     console.log('Web domain - fetching request');
//     return fetch(request)
//   }
//   else if(domain == 'monorepo-task-docs.devcontentstackapps.com'){
//     console.log('Docs domain detected:', domain);
//     const parsedUrl = new URL(request.url);
//     const route = parsedUrl.pathname;
//     if (route === '/edge') {
//       console.log('Docs domain - /edge route hit');
//       const response = {
//         time: new Date(),
//         domain: domain,
//         route: route
//       }
//       return new Response(JSON.stringify(response))
//     }
//     console.log('Docs domain - fetching request');
//     return fetch(request);
//   }
//   else{
//     console.log('Unknown domain detected:', domain);
//     return fetch(request);
//   }
//    }

export default async function handler(request) {
  const redirectHosts = [
    'https://monorepo-task-web.devcontentstackapps.com'
  ];

  const url = new URL(request.url);

  if (redirectHosts.includes(url.hostname)) {
    url.hostname = 'cradlepoint.com';
    return Response.redirect(url.toString(), 308);
  }

  return fetch(request);
}