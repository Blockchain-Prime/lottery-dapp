import{r as c,L as h,b as u,c as m,j as n,d as g,a as s}from"./index-72c0ec7f.js";import{M as w}from"./MrdAmount-ce3543c6.js";const b=()=>{const{currentLotteryDetails:i}=c.useContext(h),p=c.useContext(u),l=(i==null?void 0:i.rewardsBreakdown)||[],d=(i==null?void 0:i.amountCollectedInReef)||m.from(0),o=[];if(l){let r=0;l.forEach(e=>{r+=parseInt(e.toString(),16)}),l.forEach((e,t)=>{const a=parseInt(e.toString(),16)/r*d.div(m.from("1000000000000000000")).toNumber();o.push({title:`Match first ${t+1}`,prizeInReef:a.toFixed(2),prizeInDollar:(a*p).toFixed(2)+"$",winCount:t+1,noWinCount:l.length-(t+1)})})}return n(g,{title:"Prize Table",color:"#B2FAFF",children:s("dl",{className:"prize-table",children:[o.length>0&&o.map((r,e)=>s("dd",{className:"prize-table__grid-item",children:[n("small",{className:"muted",children:r.title}),n("span",{className:"prize-table__prize",children:n(w,{amount:r.prizeInReef,prefix:"~"})}),s("span",{className:"prize-table__prize-in-dollar",children:["~ ",r.prizeInDollar]}),s("ul",{className:"prize-table__winning-criteria__indicator",children:[[...Array(r.winCount)].map((t,a)=>n("li",{children:n("img",{src:"/img/winning-number-win-icon.png",width:"20",alt:`win-${e}-${a}`})},`win-${e}-${a}`)),[...Array(r.noWinCount)].map((t,a)=>n("li",{children:n("img",{src:"/img/winning-number-no-win-icon.png",width:"19",alt:`no-win-${e}-${a}`})},`no-win-${e}-${a}`))]})]},e)),o.length===0&&n("p",{children:"No data available"})]})})};export{b as default};
