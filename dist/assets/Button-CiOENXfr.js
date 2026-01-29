import{r as n,j as i,d as p}from"./index-B5aJpQwO.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:o,iconNode:c,...l},d)=>n.createElement("svg",{ref:d,...y,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:m("lucide",a),...l},[...c.map(([g,u])=>n.createElement(g,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(r,e)=>{const t=n.forwardRef(({className:s,...a},o)=>n.createElement(f,{ref:o,iconNode:e,className:m(`lucide-${x(r)}`,s),...a}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=h("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]),w=n.forwardRef(({className:r,variant:e="primary",size:t="md",isLoading:s=!1,disabled:a,children:o,...c},l)=>{const d="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",g={primary:"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",secondary:"bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-secondary-500",success:"bg-success-600 text-white hover:bg-success-700 focus:ring-success-500",danger:"bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500",warning:"bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500",outline:"border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",ghost:"text-secondary-600 hover:bg-secondary-100 focus:ring-secondary-500",link:"text-primary-600 hover:underline focus:ring-primary-500 p-0"},u={xs:"px-2.5 py-1.5 text-xs",sm:"px-3 py-2 text-sm",md:"px-4 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-lg"};return i.jsxs("button",{ref:l,className:p(d,g[e],u[t],r),disabled:s||a,...c,children:[s&&i.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),o]})});w.displayName="Button";export{w as B,v as C,h as c};
