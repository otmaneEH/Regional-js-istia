let mayjsone='{"name":"mayjones","age":25,"city":"new york"}';
let json=JSON.parse(mayjsone);
document.getElementsByTagName('p')[0].innerHTML=json.name;
document.getElementsByTagName('p')[0].append(json.age," years old");
document.getElementsByTagName('p')[0].append(json.city," city");