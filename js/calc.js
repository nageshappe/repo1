var value1;
function disp(val)
{
    
    document.getElementById("d").value+=val;
}

function result()
{
    document.getElementById("t1").value+=document.getElementById("d").value;
    console.log(document.getElementById("t1").value)
        res=eval(document.getElementById("t1").value);
        document.getElementById("d").value=res;
        document.getElementById("t1").value="";
    
}

function disp_oper(obj,val)
{
   document.getElementById("t1").value=document.getElementById("d").value+val;
}
function cler(val)
{
    document.getElementById("d").value=val;
}


function memory_add(){
 
 value1= document.getElementById("d").value;
 
}

function memory_recall()
{
    document.getElementById("d").value=value1;
}

function memory_clear()
{
    value1="";
}

function calc_sqrt()
{
    val = document.getElementById("d").value;
    document.getElementById("d").value= Math.sqrt(val);
}

function calc_sqr()
{
    val = document.getElementById("d").value;
    document.getElementById("d").value= val * val;
}

function calc_inv()
{
    val = document.getElementById("d").value;
    document.getElementById("d").value= 1/val;
}