let date = new Date();
let hours = date.getHours();
if (hours >= 5 && hours < 11){
  alert ('Доброго ранку')
}else if(hours >= 11 && hours < 17){
  alert ('Доброго дня')
}else if(hours >= 17 && hours < 23){
  alert ('Доброго вечора')
}else if(hours >= 23 && hours < 24 || hours >= 0 && hours < 5 ){
  alert ('Доброго ночі')
}
