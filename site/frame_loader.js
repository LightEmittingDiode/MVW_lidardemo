/* Retry a transient missing frame once with a fresh CDN/browser cache key. */
'use strict';
window.LidarFrameLoader={async fetch(path){
 const url=new URL(path,document.baseURI);let response;
 for(let attempt=0;attempt<2;attempt++){
  const requestURL=new URL(url);
  if(attempt)requestURL.searchParams.set('_frame_retry',String(Date.now()));
  try{response=await fetch(requestURL.href,{cache:attempt?'no-store':'default'});}
  catch(error){if(attempt)throw error;continue;}
  if(response.ok||attempt||!(response.status===404||response.status>=500))return response;
  await new Promise(resolve=>setTimeout(resolve,300));
 }
 return response;
}};
