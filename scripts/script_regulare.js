var p = document.getElementsByTagName('p')[0];
alert(/^[A-Z]/.test(p.value))


// Language: javascript
$(document).ready(function(){
    $("*").click(function(){
        $(this).hide();
    });
    });