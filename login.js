 // Get the modal
 var modal = document.getElementById('id01');
 var modal2= document.getElementById('id02');
 var sin = document.getElementById('sin');
            
// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
window.onclick = function(event) 
{
    if (event.target == modal2) 
    {
        modal.style.display = "none";
    }
}
function hide()
{
   if(sin.onclick)
   {
       modal.style.display= "none";
       modal2.style.display= "block";
   }
}

/**************************************Validation of Contact *************************** */


  function popup1()
  {
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
  }
  function popup2()
  {
    document.getElementById('id01').style.display='block';
    document.getElementById('id02').style.display='none';
  }