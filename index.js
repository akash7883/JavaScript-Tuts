
var h=document.getElementById('clock');
setInterval(show_time,1000);
function show_time()
{
    var curr_date=new Date();
    hrs=curr_date.getHours();
    min=curr_date.getMinutes();
    sec=curr_date.getSeconds();
    h.innerHTML=hrs+":"+min+":"+sec;
    
}
show_time()


