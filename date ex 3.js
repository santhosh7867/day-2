let month_name = new Date("10/11/2009"); 
        let monthname = new Date("11/13/2011"); 
        //  let now=new Date()



let djyear=month_name.toLocaleString('default',{date:"long",month:"long",weekday:"long"})
let djy=monthname.toLocaleString('default',{date:"long",month:"long",weekday:"long"})


document.write(djyear)

document.write(djy)