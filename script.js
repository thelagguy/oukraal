
const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Africa/Johannesburg'})),day=d.getDay(),m=d.getHours()*60+d.getMinutes();
const T=[[540,1020],[450,1320],[450,1320],[450,1320],[450,1320],[420,1320],[420,1320]],o=m>=T[day][0]&&m<T[day][1];
document.querySelectorAll('[data-d]').forEach(e=>e.classList.toggle('today',+e.dataset.d===day));
document.querySelectorAll('.status').forEach(e=>{e.textContent=o?'Open now':'Closed now';e.classList.add(o?'on':'off')});
