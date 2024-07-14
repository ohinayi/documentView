import{W as k,j as e}from"./app-B1ATeqai.js";import{I as i}from"./InputLabel-BxEOhNae.js";import{T as o,I as d}from"./TextInput-CwyC4Mvv.js";import{A as y}from"./AuthenticatedLayout-Cxvom4ei.js";import"./ApplicationLogo-5OkO0Jfi.js";import"./transition-CYa39wzD.js";const P=({personnel:r={},auth:u,isEditing:l=!1})=>{const m=new Date().getFullYear(),c=Array.from({length:m-2009},(a,j)=>m-j),x=["Second Lieutenant","Lieutenant","Captain","Major","Lieutenant Colonel","Colonel","Brigadier General","Major General","Lieutenant General","General","Field Marshal"],{data:t,setData:s,post:g,put:f,processing:h,errors:n}=k({name:r.name||"",rank:r.rank||"",serviceNo:r.serviceNo||"",nextOfKin:r.nextOfKin||"",unit:r.unit||"",yearOfPayment:r.yearOfPayment||m.toString(),dateOfDeath:r.dateOfDeath||"",remarksStatus:r.remarksStatus||""}),v=a=>{a.preventDefault(),l?f(route("personnels.update",r.id)):g(route("personnels.store"))};return e.jsx(y,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:l?"Edit Personnel":"Add Personnel"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{onSubmit:v,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",value:t.name,className:"mt-1 block w-full",onChange:a=>s("name",a.target.value),required:!0}),e.jsx(d,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"rank",value:"Rank"}),e.jsxs("select",{id:"rank",name:"rank",value:t.rank,className:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:a=>s("rank",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Rank"}),x.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsx(d,{message:n.rank,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"serviceNo",value:"Service Number"}),e.jsx(o,{id:"serviceNo",type:"text",name:"serviceNo",value:t.serviceNo,className:"mt-1 block w-full",onChange:a=>s("serviceNo",a.target.value),required:!0}),e.jsx(d,{message:n.serviceNo,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"nextOfKin",value:"Next of Kin"}),e.jsx(o,{id:"nextOfKin",type:"text",name:"nextOfKin",value:t.nextOfKin,className:"mt-1 block w-full",onChange:a=>s("nextOfKin",a.target.value),required:!0}),e.jsx(d,{message:n.nextOfKin,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"unit",value:"Unit"}),e.jsx(o,{id:"unit",type:"text",name:"unit",value:t.unit,className:"mt-1 block w-full",onChange:a=>s("unit",a.target.value),required:!0}),e.jsx(d,{message:n.unit,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"yearOfPayment",value:"Year of Payment"}),e.jsxs("select",{id:"yearOfPayment",name:"yearOfPayment",value:t.yearOfPayment,className:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:a=>s("yearOfPayment",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Year"}),c.map(a=>e.jsx("option",{value:a.toString(),children:a},a))]}),e.jsx(d,{message:n.yearOfPayment,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"dateOfDeath",value:"Date of Death"}),e.jsx(o,{id:"dateOfDeath",type:"date",name:"dateOfDeath",value:t.dateOfDeath,className:"mt-1 block w-full",onChange:a=>s("dateOfDeath",a.target.value),required:!0}),e.jsx(d,{message:n.dateOfDeath,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"remarksStatus",value:"Remarks Status"}),e.jsxs("select",{id:"remarksStatus",name:"remarksStatus",value:t.remarksStatus,className:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:a=>s("remarksStatus",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Paid",children:"Paid"}),e.jsx("option",{value:"Declined",children:"Declined"})]}),e.jsx(d,{message:n.remarksStatus,className:"mt-2"})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:h,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:l?"Update Personnel":"Add Personnel"})})]})})})})})})};export{P as default};
