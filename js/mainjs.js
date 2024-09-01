setInterval(myDate, 500)

function myDate() {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate()
  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()

  document.getElementById('clock').innerHTML =
    "It's " +
    year +
    '.' +
    month +
    '.' +
    day +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    '</br>'

  if (6 <= hours && hours < 12)
    document.getElementById('clock').innerHTML += "Good morning, I'm"
  else if (12 <= hours && hours < 18)
    document.getElementById('clock').innerHTML += "Good afternoon, I'm"
  else document.getElementById('clock').innerHTML += "Good evening, I'm"
}
