var arr = [];

for ( var i = 1; i <=5; i++) {
    var name = prompt('Введите имя пользователя');
    arr.unshift(name);
   
}
console.log('arr', arr);
var username = prompt('Введите имя пользователя');


for (var i = 0; i < arr.length; i++) {
  if (arr[i]===username) {
      alert(username + ', вы успешно вошли');
  }
  else {
 alert('Вы не прошли регистрацию');
      break;
  }
}
