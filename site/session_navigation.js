'use strict';
window.LidarSessionNavigation={create(frames){
 const groups=new Map();for(const f of frames){const id=f.source_name.split('_sweep_')[0];if(!groups.has(id))groups.set(id,{id,prefix:id,indices:[]});groups.get(id).indices.push(f.index);}
 const sessions=[...groups.values()].map(g=>({...g,frameCount:g.indices.length,label:g.prefix.slice(7,9)+':'+g.prefix.slice(9,11)+':'+g.prefix.slice(11,13)+' · '+g.indices.length.toLocaleString()+' frames'}));
 const all={id:'all',label:'All sessions · '+frames.length.toLocaleString()+' frames',indices:frames.map(f=>f.index),frameCount:frames.length};
 const get=id=>id==='all'?all:sessions.find(s=>s.id===id)||all;
 return {sessions,all,get,toGlobal(id,pos){const a=get(id).indices;return a[Math.max(0,Math.min(a.length-1,pos))];},toLocal(id,global){return get(id).indices.indexOf(global);},sessionFor(global){return sessions.find(s=>s.indices.includes(global));},first(id){return get(id).indices[0];},last(id){return get(id).indices.at(-1);}};
}};
