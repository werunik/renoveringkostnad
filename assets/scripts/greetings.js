var currentDate = new Date();

function insertTimeGreetingsValue(value) {
  document.getElementById("timegreetings").innerHTML = value;
}

function insertDayGreetingsValue(value) {
  document.getElementById("daygreetings").innerHTML = value;
}

function timeGreetings() {
  var currentHour = currentDate.getHours()
  
  if (currentHour >= 6 && currentHour <= 11 ) {
    insertTimeGreetingsValue("morning")
  } else if (currentHour >= 11 && currentHour <= 16) {
    insertTimeGreetingsValue("afternoon")
  } else {
    insertTimeGreetingsValue("evening")
  }
}

function dayGreetings() {
  var currentDay = currentDate.getUTCDay()
  
  switch(currentDay){
    case 0 :
      insertDayGreetingsValue("Sunday")
      break;
    case 1 :
      insertDayGreetingsValue("Monday")
      break;
    case 2 :
      insertDayGreetingsValue("Tuesday")
      break;
    case 3 :
      insertDayGreetingsValue("Wednesday")
      break;
    case 4 :
      insertDayGreetingsValue("Thursday")
      break;
    case 5 :
      insertDayGreetingsValue("Friday")
      break;
    case 6 :
      insertDayGreetingsValue("Saturday")
      break;
    default :
      insertDayGreetingsValue("Day not available")
  }
}

timeGreetings()
dayGreetings()