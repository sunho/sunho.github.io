(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2603)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=i(8754),n=i(1757),l=n._(i(7294)),s=r._(i(2636)),a=i(7757),o=i(3735),c=i(3341);i(4210);let d=r._(i(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,i,r,n,l,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,i]=l.version.split("."),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,l.forwardRef)((e,t)=>{let{imgAttributes:i,heightInt:r,widthInt:n,qualityInt:s,className:a,imgStyle:o,blurStyle:c,isLazy:d,fetchPriority:u,fill:f,placeholder:m,loading:p,srcString:b,config:v,unoptimized:x,loader:j,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:k,setShowAltText:N,onLoad:_,onError:C,...E}=e;return p=d?"lazy":p,l.default.createElement("img",{...E,...g(u),loading:p,width:n,height:r,decoding:"async","data-nimg":f?"fill":"1",className:a,style:{...o,...c},...i,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,b,m,w,y,k,x))},[b,m,w,y,k,C,x,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,m,w,y,k,x)},onError:e=>{N(!0),"blur"===m&&k(!0),C&&C(e)}})}),b=(0,l.forwardRef)((e,t)=>{var i;let r,n,{src:h,sizes:b,unoptimized:v=!1,priority:x=!1,loading:j,className:w,quality:y,width:k,height:N,fill:_,style:C,onLoad:E,onLoadingComplete:S,placeholder:P="empty",blurDataURL:I,fetchPriority:L,layout:M,objectFit:z,objectPosition:O,lazyBoundary:A,lazyRoot:V,...R}=e,T=(0,l.useContext)(c.ImageConfigContext),D=(0,l.useMemo)(()=>{let e=u||T||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[T]),F=R.loader||d.default;delete R.loader;let G="__next_img_default"in F;if(G){if("custom"===D.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...r}=t;return e(r)}}if(M){"fill"===M&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!b&&(b=t)}let U="",W=m(k),J=m(N);if("object"==typeof(i=h)&&(f(i)||void 0!==i.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,U=e.src,!_){if(W||J){if(W&&!J){let t=W/e.width;J=Math.round(e.height*t)}else if(!W&&J){let t=J/e.height;W=Math.round(e.width*t)}}else W=e.width,J=e.height}}let B=!x&&("lazy"===j||void 0===j);(!(h="string"==typeof h?h:U)||h.startsWith("data:")||h.startsWith("blob:"))&&(v=!0,B=!1),D.unoptimized&&(v=!0),G&&h.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0),x&&(L="high");let[K,q]=(0,l.useState)(!1),[Y,H]=(0,l.useState)(!1),X=m(y),Q=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:O}:{},Y?{}:{color:"transparent"},C),$="blur"===P&&I&&!K?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:W,heightInt:J,blurWidth:r,blurHeight:n,blurDataURL:I,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:l,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:l,kind:"x"}}(t,n,s),d=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,r)=>a({config:t,src:i,quality:l,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:i,quality:l,width:o[d]})}}({config:D,src:h,unoptimized:v,width:W,quality:X,sizes:b,loader:F}),ee=h,et=(0,l.useRef)(E);(0,l.useEffect)(()=>{et.current=E},[E]);let ei=(0,l.useRef)(S);(0,l.useEffect)(()=>{ei.current=S},[S]);let er={isLazy:B,imgAttributes:Z,heightInt:J,widthInt:W,qualityInt:X,className:w,imgStyle:Q,blurStyle:$,loading:j,config:D,fetchPriority:L,fill:_,unoptimized:v,placeholder:P,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:ei,setBlurComplete:q,setShowAltText:H,...R};return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,{...er,ref:t}),x?l.default.createElement(s.default,null,l.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:R.crossOrigin,referrerPolicy:R.referrerPolicy,...g(L)})):null)}),v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:l,objectFit:s}=e,a=r||t,o=n||i,c=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&n?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},2603:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var r=i(5893),n=i(1664),l=i.n(n),s=i(5675),a=i.n(s),o=i(6653),c=i(8193);function d(){let e=["water","cloudy4","spider_web"].map(e=>({img:"/shaders/".concat(e,".png"),name:e}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"text-2xl font-bold",children:["CS Undergrad @ UCSD ",(0,r.jsx)(a(),{alt:"",width:25,height:25,src:"/trident.png",className:"inline-block mb-2"})]}),(0,r.jsx)("div",{className:"mt-5 text-2xl",children:"GLSL Shaders"}),(0,r.jsx)("div",{className:"",children:e.map(e=>(0,r.jsx)(l(),{href:"/shaders/".concat(e.name),children:(0,r.jsx)("div",{className:"inline-block h-40 w-60 m-2",children:(0,r.jsx)("div",{className:"relative h-full -z-10",children:(0,r.jsx)(a(),{alt:"",src:e.img,layout:"fill",objectFit:"cover",quality:100})})})}))}),(0,r.jsx)("div",{className:"mt-5 flex justify-between items-center",children:(0,r.jsx)("div",{className:"text-2xl inline-block",children:"Projects"})}),[{image:"/projects/llvm.png",title:"LLVM Compiler Infrastructure",desc:"LLVM is a compiler framework used by rust, swift, clang, etc. I have major contributions to core JIT infrastructure of LLVM.",link:"https://github.com/llvm/llvm-project/commits?author=sunho"},{image:"/projects/vita3k.svg",title:"Vita3K",desc:"Vita3K is Open Source Playstation Vita Emulator. I'm one of core maintainers working on GPU/CPU/kernel emulation. ",link:"https://github.com/Vita3K/Vita3K/commits?author=sunho"},{image:"/projects/spectral.jpg",title:"GPUSpectral",desc:"Vulkan monte-carlo ray-tracing renderer built from scratch.",link:"https://github.com/sunho/GPUSpectral"},{image:"/projects/katoml.png",title:"KatoML",desc:"Machine learning framework built from scratch.",link:"https://github.com/sunho/KatoML"},{image:"/projects/aheui.png",title:"AheuiJIT",desc:"JIT compiler for Aheui language built from scratch.",link:"https://github.com/sunho/AheuiJIT.git"}].map(e=>(0,r.jsx)("div",{className:"mx-3 mb-2",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"flex-shrink-0 inline-block h-[80px] w-[80px]",children:(0,r.jsx)("div",{className:"relative h-full -z-10",children:(0,r.jsx)(a(),{alt:"",src:e.image,layout:"fill",objectFit:"contain",quality:100})})}),(0,r.jsxs)("div",{className:"pl-3 mb-5",children:[(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("p",{className:"underline font-bold",children:(0,r.jsx)("span",{children:e.title})})}),(0,r.jsx)("p",{children:e.desc})]})]})})),(0,r.jsx)("div",{className:"text-2xl mt-5",children:"Talks"}),[{title:"Building Programming Language Infrastructure With LLVM Components",place:"2023 ACM SIGPLAN Conference on PLDI",link:"https://pldi23.sigplan.org/details/pldi-2023-tutorials/2/Building-Programming-Language-Infrastructure-With-LLVM-Components",youtube:!1},{title:"JITLink: Native Windows JITing in LLVM",place:"2022 LLVM Developer's Meeting",link:"https://www.youtube.com/watch?v=UwHgCqQ2DDA",youtube:!0}].map(e=>(0,r.jsxs)("div",{className:"ml-2 mt-1",children:[(0,r.jsx)("a",{href:e.link,children:(0,r.jsx)("span",{className:"font-bold underline",children:e.title})}),e.youtube?(0,r.jsx)(c.b1v,{className:"ml-1   mb-[2px]  inline-block"}):(0,r.jsx)(o.NxY,{className:"ml-1 inline-block"}),(0,r.jsxs)("span",{children:[" ","•"," "]}),(0,r.jsx)("span",{children:e.place})]})),(0,r.jsx)("div",{className:"text-2xl mt-5",children:"Algorithms"}),(0,r.jsx)("a",{href:"https://codeforces.com/profile/sunho",children:(0,r.jsx)("div",{className:"text-blue-600 border-2 rounded-lg border-blue-600 font-bold p-1 m-2 inline-block",children:"expert @ codeforces"})}),(0,r.jsx)("a",{href:"https://solved.ac/en/profile/sunho",children:(0,r.jsx)("div",{className:"text-green-400 border-2 rounded-lg border-green-400 font-bold p-1 m-2 inline-block",children:"platinum II @ solved.ac"})}),(0,r.jsx)("div",{className:"h-40"})]})}},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[777,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);