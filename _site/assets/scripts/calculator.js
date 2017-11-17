function calculateTotal(form){

  const MATERIAL = 7000; //sek per kvm
  const ARBETSKOSTNAD = 12000; //sek per kvm
  const ROT = 0.3; //30%
  const RESEKOSTNAD = 5000;
  
  var projectOwner = form.owner.value.toLowerCase();
  var projectType = form.project.value.toLowerCase();
  var projectSize = Number(form.size.value);

  var work_total = ARBETSKOSTNAD*projectSize
  var rot_total = work_total*ROT

  function kitchenTotal() {
    kitchen_total = (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
    window.location = 'http://localhost:4000/en/total?total=' + kitchen_total + 
    '&owner=' + projectOwner + '&type=' + projectType + '&size=' + projectSize
  }

  function bathroomTotal() {
    return (MATERIAL*projectSize) + (work_total-rot_total) + RESEKOSTNAD
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
  var owner = getParameterByName('owner');
  document.getElementById("owner").innerHTML = owner;
  document.getElementsByTagName("input")[1].value = owner;
  
  var total = getParameterByName('total');
  document.getElementById("total").innerHTML = total;
  document.getElementsByTagName("input")[2].value = total;

  var type = getParameterByName('type');
  document.getElementById("type").innerHTML = type;
  document.getElementsByTagName("input")[3].value = type;

  var size = getParameterByName('size');
  document.getElementById("size").innerHTML = size;
  document.getElementsByTagName("input")[4].value = size;
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