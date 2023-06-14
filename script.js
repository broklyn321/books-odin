let lib=[];

function book(ti,au,pg,re)
{
    this.ti=ti;
    this.au=au;
    this.pg=pg;
    this.re=re;
}
function addb()
{
    let ti=document.querySelector("#ti").value;
    let au=document.getElementById("#au").value;
    let pg=document.getElementById("#pg").value;
    let re=document.getElementById("#re").checked;
    let nbook= new book(ti,au,pg,re);
    console.log(nbook);
}
let newbb=document.querySelector("#addb");
newbb.addEventListener("click", function() {
    
    let newf= document.querySelector("#info");
    newf.style.display="block";
})
document.querySelector("#info").addEventListener("submit",function(){
    event.preventDefault;
    addb();
})