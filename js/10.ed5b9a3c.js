(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2f20":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("q-form",{staticClass:"registration-form-component q-gutter-md q-my-md row flex-center",attrs:{id:"register",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},on:{submit:e.onSubmit}},[a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.faName.placeholder,rules:e.faName.rules},model:{value:e.faName.value,callback:function(l){e.$set(e.faName,"value",l)},expression:"faName.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.enName.placeholder,rules:e.enName.rules,"reverse-fill-mask":!0},model:{value:e.enName.value,callback:function(l){e.$set(e.enName,"value",l)},expression:"enName.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.email.placeholder,rules:e.email.rules},model:{value:e.email.value,callback:function(l){e.$set(e.email,"value",l)},expression:"email.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.mobile.placeholder,rules:e.mobile.rules},model:{value:e.mobile.value,callback:function(l){e.$set(e.mobile,"value",l)},expression:"mobile.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.province.placeholder,rules:e.province.rules},model:{value:e.province.value,callback:function(l){e.$set(e.province,"value",l)},expression:"province.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.city.placeholder,rules:e.city.rules},model:{value:e.city.value,callback:function(l){e.$set(e.city,"value",l)},expression:"city.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.gender.placeholder,rules:e.gender.rules},model:{value:e.gender.value,callback:function(l){e.$set(e.gender,"value",l)},expression:"gender.value"}})],1),a("div",{staticClass:"col-sm-6 col-xs-12 q-mx-none q-px-md"},[a("q-input",{attrs:{outlined:"","lazy-rules":"",placeholder:e.age.placeholder,rules:e.gender.rules},model:{value:e.age.value,callback:function(l){e.$set(e.age,"value",l)},expression:"age.value"}})],1),a("div",{staticClass:"col-12 q-gutter-sm"},[a("span",{staticClass:"text text-tip"},[e._v("آیا برای شرکت در رویداد به دنبال هم تیمی هستید ؟")]),a("q-radio",{staticClass:"q-mt-none",attrs:{val:!0,label:"بله"},model:{value:e.needTeammate,callback:function(l){e.needTeammate=l},expression:"needTeammate"}}),a("q-radio",{staticClass:"q-mt-none",attrs:{val:!1,label:"خیر"},model:{value:e.needTeammate,callback:function(l){e.needTeammate=l},expression:"needTeammate"}})],1),a("q-btn",{staticClass:"col-6 q-mb-xl",attrs:{unelevated:"","no-caps":"",type:"submit",color:"primary",label:e.submit,loading:e.loading}})],1)},s=[],o=(a("498a"),{name:"RegistrationForm",data(){return{loading:!1,needTeammate:!1,faName:{placeholder:"نام و نام خانوادگی (فارسی)",value:"",type:"text",rules:[e=>!!e.trim()||"الزامی"],isValid:null},enName:{placeholder:"First Name and Last name",value:"",type:"text",rules:[e=>!!e.trim()||"الزامی"],isValid:null},email:{placeholder:"آدرس ایمیل",value:"",type:"email",rules:[e=>!!e.trim()||"الزامی"],isValid:null},mobile:{placeholder:"شماره تلفن همراه",value:"",type:"tel",rules:[e=>!!e.trim()||"الزامی"],isValid:null},province:{placeholder:"نام استان",value:"",type:"text",rules:[e=>!!e.trim()||"الزامی"],isValid:null},city:{placeholder:"نام شهر",value:"",type:"text",rules:[e=>!!e.trim()||"الزامی"],isValid:null},gender:{placeholder:"جنسیت",value:"",type:"text",rules:[e=>!!e.trim()||"الزامی"],isValid:null},age:{placeholder:"سن",value:"",type:"number",rules:[e=>!!e.trim()||"الزامی"],isValid:null},submit:"تایید اطلاعات و ارسال"}},methods:{onSubmit(){this.loading=!0;const e={},l=e=>{this.loading=!1,console.log(e)};this.$store.dispatch("app/register",{body:e,response:l})}}}),i=o,n=(a("6875"),a("2877")),r=a("0378"),u=a("27f9"),c=a("3786"),m=a("9c40"),d=a("eebe"),p=a.n(d),v=Object(n["a"])(i,t,s,!1,null,null,null);l["default"]=v.exports;p()(v,"components",{QForm:r["a"],QInput:u["a"],QRadio:c["a"],QBtn:m["a"]})},6875:function(e,l,a){"use strict";a("ffd2")},ffd2:function(e,l,a){}}]);