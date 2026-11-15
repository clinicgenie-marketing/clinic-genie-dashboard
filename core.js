(function(root){
'use strict';
const statuses=['New','Acknowledged','In progress','Waiting for client','Completion claimed','Resolved'];
function workingMinutes(start,end,holidays=[]){
 let a=new Date(start).getTime(),b=new Date(end).getTime();if(!Number.isFinite(a)||!Number.isFinite(b)||b<=a)return 0;
 const offset=8*3600000;let day=Math.floor((a+offset)/86400000)*86400000-offset,total=0;
 for(;day<b;day+=86400000){const d=new Date(day+offset),key=d.toISOString().slice(0,10);if([0,6].includes(d.getUTCDay())||holidays.includes(key))continue;
 const open=day+9.5*3600000,close=day+18.5*3600000;total+=Math.max(0,Math.min(b,close)-Math.max(a,open))/60000;}
 return Math.round(total);
}
function classify(t,now,rules){if(t.status==='Resolved')return {label:'Resolved',tone:'green'};if(t.due&&new Date(t.due)<new Date(now))return {label:'Deadline missed',tone:'red'};const age=workingMinutes(t.updated,now,rules.holidays);
if(t.status==='Waiting for client')return age>=rules.follow*540?{label:'Follow up suggested',tone:'amber'}:{label:'Waiting for client',tone:'neutral'};
if(t.status==='New'){let elapsed=workingMinutes(t.created,now,rules.holidays);return elapsed>=540?{label:'Needs Roger',tone:'red'}:elapsed>=rules.ack*60?{label:'Reply needed',tone:'amber'}:{label:'New request',tone:'blue'};}
if(t.status==='Completion claimed')return {label:'Verify completion',tone:'blue'};
return age>=rules.progress*540?{label:'Update needed',tone:'amber'}:{label:'On track',tone:'green'};}
function transition(t,status,note,now){if(!statuses.includes(status))throw Error('Invalid status');if(status==='Resolved'&&!note.trim())throw Error('Add completion evidence before resolving.');return {...t,status,updated:now,history:[...t.history,{at:now,text:status+(note.trim()?': '+note.trim():''),actor:'Preview user'}]};}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
root.CG={statuses,workingMinutes,classify,transition,esc};if(typeof module!=='undefined')module.exports=root.CG;
})(globalThis);
