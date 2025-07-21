// functions/hello.js

export default function handler(request, response) {
    const domain = request.headers.host || request.headers['x-forwarded-host'];
    console.log('Hello function called from domain:', domain);
    
    if (domain === 'monorepo-task-web.devcontentstackapps.com') {
      console.log('Web domain detected in hello function');
      console.log('Request body:', request.body);
      console.log('Request query:', request.query);
      console.log('Request cookies:', request.cookies);
      
      response.status(200).json({
        message: 'Hello from Web Domain!',
        domain: domain,
        type: 'web'
      });
    } else if (domain === 'monorepo-task-docs.devcontentstackapps.com') {
      console.log('Docs domain detected in hello function');
      console.log('Request body:', request.body);
      console.log('Request query:', request.query);
      console.log('Request cookies:', request.cookies);
      
      response.status(200).json({
        message: 'Hello from Docs Domain!',
        domain: domain,
        type: 'docs'
      });
    } else {
      console.log('Unknown domain detected in hello function:', domain);
      console.log('Request body:', request.body);
      console.log('Request query:', request.query);
      console.log('Request cookies:', request.cookies);
      
      response.status(200).json({
        message: 'Hello from Unknown Domain!',
        domain: domain,
        type: 'unknown'
      });
    }
  }
  