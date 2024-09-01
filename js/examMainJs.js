var item = [
  {
    order: 1,
    type: 'single',
    description:
      'Which one of the follows is regarded as the "Jay Happy Song"?',
    option: ['Small Town Girl', 'Spring Wind', 'Rain', 'Seventeen'],
    solution: [0,1,0,0],
    answer: [ 0, 0, 0,0],
    mark: 0,
    score: 0,
  },
  {
    order: 2,
    type: 'single',
    description:
      'Which live is regarded as the last peak of "Too Beatiful" before 2020?',
    option: ['Soul Power', 'Love can', 'One Two Three', 'Little Guy'],
    solution: [ 0, 0,1, 0],
    answer: [ 0, 0, 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 3,
    type: 'single',
    description: 'In which year did DT write "I Love You"?',
    option: ['1993', '1994', '1995', '1996'],
    solution: [1, 0, 0, 0],
    answer: [ 0, 0, 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 4,
    type: 'single',
    description: "Which song is named after DT'girlfriend?",
    option: ['Melody', 'Susan Said', 'Catherine', 'My Anata'],
    solution: [ 0, 0,1, 0],
    answer: [ 0, 0, 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 5,
    type: 'multiple',
    description: 'Choose the songs that were banned before.',
    option: ['Different', 'Ghost', 'Bastard', 'Wish you happiness'],
    solution: [1,1,1,1],
    answer: [ 0, 0, 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 6,
    type: 'multiple',
    description:
      "Who has DT written songs for?",
    option: ['Tony Leung Chiu Wai', 'Fish Leong', 'A-Mei', 'Sandy Lam'],
    solution: [1,1,1,1],
    answer: [ 0, 0, 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 7,
    type: 'judge',
    description: 'The album that DT was most satisfied with is "69 movements".',
    solution: [1, 0],
    answer: [ 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 8,
    type: 'judge',
    description: '"Angle" was put into the album because of Yanfang Mei.',
    solution: [1, 0],
    answer: [ 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 9,
    type: 'judge',
    description: 'The album "I\'m ok" means DT was ok at that time.',
    solution: [ 0,1],
    answer: [ 0, 0],
    mark: 0,
    score: 0,
  },
  {
    order: 10,
    type: 'judge',
    description: 'DT dose not like the title of "R&B godfather".',
    solution: [1, 0],
    answer: [ 0, 0],
    mark: 0,
    score: 0,
  },
]

var nowIndex = 1;

function updateInfo() {
  document.getElementById('index').innerHTML = nowIndex
  document.getElementById('description').innerHTML =
    item[nowIndex - 1].description
  var op = document.getElementById('options')
  op.innerHTML = ''
  if (item[nowIndex - 1].type == 'single') {
    for (var i = 0; i < 4; i++) {
      if(item[nowIndex-1].answer[i]==0){
        op.innerHTML += "<li>"+
        "<button class=\"oneSingleOption\" onclick=choose("+i+")>" +
          String.fromCharCode(65+i) +
          "</button>" +
          "<p class=\"optionInfo\">" +
          item[nowIndex - 1].option[i] +
          "</p>" +
          "</li>"
      }else{
        op.innerHTML += "<li>"+
        "<button class=\"chooseOneSingleOption\" onclick=choose("+i+")>" +
          String.fromCharCode(65+i) +
          "</button>" +
          "<p class=\"optionInfo\">" +
          item[nowIndex - 1].option[i] +
          "</p>" +
          "</li>"
      }
    }
  }
  else if (item[nowIndex - 1].type == 'multiple') {
    for (var i = 0; i < 4; i++) {
      if(item[nowIndex-1].answer[i]==0){
        op.innerHTML += "<li>"+
        "<button class=\"oneOption\" onclick=choose("+i+")>" +
          String.fromCharCode(65+i) +
          "</button>" +
          "<p class=\"optionInfo\">" +
          item[nowIndex - 1].option[i] +
          "</p>" +
          "</li>"
      }else{
        op.innerHTML += "<li>"+
        "<button class=\"chooseOneOption\" onclick=choose("+i+")>" +
          String.fromCharCode(65+i) +
          "</button>" +
          "<p class=\"optionInfo\">" +
          item[nowIndex - 1].option[i] +
          "</p>" +
          "</li>"
      }
    }
  }else {
    if(item[nowIndex-1].answer[0]==0){
      op.innerHTML += "<li>"+
        "<button class=\"oneSingleOption\" onclick=choose(0)>" +
          "&#10004" +
          "</button>" +
        "</li>"
    }else {
      op.innerHTML += "<li>"+
        "<button class=\"chooseOneSingleOption\" onclick=choose(0)>" +
          "&#10004" +
          "</button>" +
        "</li>"
    }


    if(item[nowIndex-1].answer[1]==0){
      op.innerHTML += "<li>"+
        "<button class=\"oneSingleOption\" onclick=choose(1)>" +
          "&#10006" +
          "</button>" +
        "</li>"
    }else {
      op.innerHTML += "<li>"+
        "<button class=\"chooseOneSingleOption\" onclick=choose(1)>" +
          "&#10006" +
          "</button>" +
        "</li>"
    }
  }
}

addEventListener('load', function () {
  for(var i=1;i<=10;i++){
    document.getElementById(i).classList.add("noAnswer");
  }
  setNowIndex(1);
  updateInfo();
})

function setNowIndex(id) {
  document.getElementById(nowIndex).classList.remove("nowAnswer");

  nowIndex = id;
  document.getElementById(nowIndex).classList.add("nowAnswer");

  updateInfo();
}

function previous(){
  if(nowIndex>1){
    setNowIndex(nowIndex-1);
    updateInfo();
  }
}

function next(){
  if(nowIndex<10){
    setNowIndex(nowIndex+1);
    updateInfo();
  }
}

function mark(){
  if(item[nowIndex-1].mark==0){
    item[nowIndex-1].mark=1;
    document.getElementById(nowIndex).classList.add("markAnswer");
  }
}

function unmark(){
  if(item[nowIndex-1].mark==1){
    item[nowIndex-1].mark=0;
    document.getElementById(nowIndex).classList.remove("markAnswer");
  }
}

function choose(op){
  var object = document.getElementById(nowIndex);
  

  if(item[nowIndex-1].type=="single"){
    if(!object.classList.contains("Answered"))
    object.classList.add("Answered");

    for(var i=0;i<4;i++){
      item[nowIndex-1].answer[i]=0;
    }
    item[nowIndex-1].answer[op]=1;
    
  }else if(item[nowIndex-1].type=="multiple"){
    item[nowIndex-1].answer[op]^=1;
    var answered = 0;
    for(var i=0;i<4;i++){
      if(item[nowIndex-1].answer[op]==1){
        answered = 1;
        break;
      }
    }
    if(answered){
      if(!object.classList.contains("Answered"))
        object.classList.add("Answered");
    }else {
      object.classList.remove("Answered");
    }
  }else {
    if(!object.classList.contains("Answered"))
    object.classList.add("Answered");

    for(var i=0;i<2;i++){
      item[nowIndex-1].answer[i]=0;
    }
    item[nowIndex-1].answer[op]=1;
  }
  updateInfo();
}