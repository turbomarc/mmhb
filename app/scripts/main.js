console.log('\'Allo \'Allo!');
<!--
function popup(mylink, windowname)
{
    console.log('in popup');
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=400,height=200,scrollbars=yes');
return false;
}