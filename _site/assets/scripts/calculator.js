function calculateTotal(form){

  const MATERIAL = 7000; //sek per kvm
  const ARBETSKOSTNAD = 12000; //sek per kvm
  const ROT = 0.3; //30%
  const RESEKOSTNAD = 5000;
  
  let projectOwnerName = form.name.value.toLowerCase();
  let projectOwnerEmail = form.email.value.toLowerCase();
  let projectType = form.project.value.toLowerCase();
  let projectOwnerLocation = form.location.value.toLowerCase();
  let projectSize = Number(form.size.value);
  let source = document.referrer;

  var work_total = ARBETSKOSTNAD*projectSize
  var rot_total = work_total*ROT

  function redirectToThankYouPage() {
    kitchen_total = (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
    window.location = 'http://localhost:4000/tack?name=' + projectOwnerName + '&type=' + projectType + '&size=' + projectSize
  }
  
  function postToApi() {
    function json(response) {  
      return response.json()  
    }
    var url = 'http://api.lvh.me:3002/v1/costs';
    fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          name:projectOwnerName,
          email:projectOwnerEmail,
          size:projectSize,
          location:projectOwnerLocation,
          source:source,
          assignment_type:projectType
        })
    })
    .then(json)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log('Failed', error);
    });
  }
  
  function kitchenTotal() {  
    postToApi()
    //redirectToThankYouPage()
  }

  function bathroomTotal() {
    postToApi()
  }

  function wcTotal() {
    return (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
  }

  function saunaTotal() {
    return (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
  }

  function laundryTotal() {
    return (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
  }
  
  switch(projectType){
    case 'kitchen' :
      kitchenTotal()
      break;
    case 'bathroom' :
      alert(bathroomTotal())
      break;
    case 'wc' :
      alert(wcTotal())
      break;
    case 'sauna' :
      alert(saunaTotal())
      break;
    case 'laundry' :
      alert(laundryTotal())
      break;
    default :
      alert('You have entered an invalid day');
  }
  return false;
}
function loadValues() {
  var name = getParameterByName('name');
  document.getElementById("name").innerHTML = name;
  document.getElementsByTagName("input")[1].value = name;
  
  var type = getParameterByName('type');
  document.getElementById("type").innerHTML = type;
  document.getElementsByTagName("input")[2].value = type;

  var size = getParameterByName('size');
  document.getElementById("size").innerHTML = size;
  document.getElementsByTagName("input")[3].value = size;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}