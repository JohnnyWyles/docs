"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6545],{16545:(t,e,s)=>{s.r(e),s.d(e,{dyte_breakout_rooms_toggle:()=>n});var o=s(94196),a=s(7147),i=s(61070),r=s(79781);s(55752);const n=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.variant="button",this.iconPack=a.d,this.t=(0,i.u)(),this.breakoutRoomToggle=()=>{var t,e,s,o,a;const i=null===(t=this.meeting.connectedMeetings.list.filter((t=>"ACTIVE"===t.status)))||void 0===t?void 0:t.length;this.states.activeBreakoutRooms||i>0?(this.stateUpdate.emit({activeBreakoutRoomGrid:!(null===(e=this.states)||void 0===e?void 0:e.activeBreakoutRoomGrid)}),r.s.activeBreakoutRoomGrid=!r.s.activeBreakoutRoomGrid):(this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(o=null===(s=this.states)||void 0===s?void 0:s.activeBreakoutRoomsManager)||void 0===o?void 0:o.active),mode:"create"}}),r.s.activeBreakoutRoomsManager={active:!(null===(a=r.s.activeBreakoutRoomsManager)||void 0===a?void 0:a.active),mode:"create"})}}render(){var t;const e=null===(t=this.meeting.self.permissions)||void 0===t?void 0:t.connectedMeetings;if((null==e?void 0:e.canAlterConnectedMeetings)||this.states.activeBreakoutRooms)return(0,o.h)(o.H,{title:this.t("Breakout Rooms")},(0,o.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,onClick:this.breakoutRoomToggle,class:{active:this.states.activeBreakoutRooms&&this.states.activeBreakoutRoomGrid},icon:this.iconPack.breakout_rooms,label:this.t("Breakout Rooms"),variant:this.variant}))}};n.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},61070:(t,e,s)=>{s.d(e,{g:()=>a,u:()=>i});var o=s(55752);const a=async t=>{if(null==t||"en"===t||""===t.trim())return o.d;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},o.d,await e.json()):o.d}catch(e){return o.d}},i=(t=o.d)=>e=>{var s;return null!==(s=t[e])&&void 0!==s?s:e}},79781:(t,e,s)=>{s.d(e,{o:()=>c,s:()=>n});var o=s(94196);const a=t=>!("isConnected"in t)||t.isConnected,i=((t,e)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...o)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(a))}),2e3),r=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:n,onChange:c}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{let s=new Map(Object.entries(null!=t?t:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{s=new Map(Object.entries(null!=t?t:{})),o.reset.forEach((t=>t()))},i=t=>(o.get.forEach((e=>e(t))),s.get(t)),n=(t,a)=>{const i=s.get(t);e(a,i,t)&&(s.set(t,a),o.set.forEach((e=>e(t,a,i))))},c="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>i(e),ownKeys:t=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>s.has(e),set:(t,e,s)=>(n(e,s),!0)}),u=(t,e)=>(o[t].push(e),()=>{r(o[t],e)});return{state:c,get:i,set:n,on:u,onChange:(e,s)=>{const o=u("set",((t,o)=>{t===e&&s(o)})),a=u("reset",(()=>s(t[e])));return()=>{o(),a()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{o.dispose.forEach((t=>t())),a()},reset:a,forceUpdate:t=>{const e=s.get(t);o.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof o.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,o.a)();s&&((t,e,s)=>{const o=t.get(e);o?o.includes(s)||o.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(o.f)),i(t)},reset:()=>{t.forEach((t=>t.forEach(o.f))),i(t)}}})()),s})({})}}]);