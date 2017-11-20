(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    var el = document.getElementById("location");
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var geolocation = JSON.parse(xhttp.responseText).location;
      var loc = geolocation.lat + ',' + geolocation.lng;
      var xhttp2 = new XMLHttpRequest();
      xhttp2.onreadystatechange = function() {
        if (xhttp2.readyState == 4 && xhttp2.status == 200) {
          var locationName = JSON.parse(xhttp2.responseText).results;
          var address = locationName[0].formatted_address;
          document.getElementById("locationName").value = address;
        }
      };
      xhttp2.open("POST", 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geolocation.lat + ',' + geolocation.lng + '&sensor=true', true);
      xhttp2.send();
      }
      if (xhttp.readyState == 4 && (xhttp.status == 403 || xhttp.status == 500)) {
        el.innerHTML += 'Sorry! Our Google Geolocation API Quota exceeded. Maybe refresh the page to try again.';
      }
    };

    var keys = [
      'AIzaSyDyYeKuGnv4UmxM4nu7B_1J0bIrCJZOhA0',
      'AIzaSyCIcWF3JiieNgMafPOj1CbRMdPV1fAuX6Y',
      'AIzaSyDkz8nnFAvSfnI31lop3QE4CUh9lVUyTCA',
      'AIzaSyDNHS8euDYNNP4Ze0ZyrJBnbO5w-mdsqPE',
      'AIzaSyDmIq5giijDQza6fdW6jpN8HfoaisSrR8w',
      'AIzaSyDD4NbRCS4HVjoO6aC2NiNhf8VW2vU2zN8',
      'AIzaSyAojMlS3vYCXLz5yYqYf01p1jmmGltPRbw',
      'AIzaSyCOYkTRKTFGBJcWMqQa527nJrwZeijn0tY',
      'AIzaSyA9B6dlqVKkqm13_4lrLAFzG3XV2svknuI',
      'AIzaSyBM0cQN_J2q4QjjzenttTarUZmvXlj4zl4',
      'AIzaSyDTfkrzfrjYEun31sY1dfjn6Q6_mIyJki8',
      'AIzaSyCG8JMKGUKKRFS0UTBpn3w6hzkih8TLCIU',
      'AIzaSyAw1c8UQKVUXc_3d_9Ax6kAFJuoH66Twig',
      'AIzaSyD7iirfrjBJFWz80VXpK2EdZnUCycSLF6Q',
      'AIzaSyDZUHoADZpq6g3TrCGROa6Wbep3fOw1eRs',
      'AIzaSyB3PJcnWltzrIMDT_AMD8vNL0v7n9PjRhg',
      'AIzaSyDWO8tV87DC4tCaHOLoADkL71G-jcyBdwk',
      'AIzaSyBJZp0aHl9a2wTf03bYbT6Um7WQVEmM4SA',
      'AIzaSyC2nWdIRRA1rZeGbOSBhZcZpj3KawVh02M',
      'AIzaSyB0D0P-tqVaMWZKen164mCMxPo1JAAwKk0',
      'AIzaSyDwgBk_9MES-vsOqfdioTrg5zhqryiuXFo',
      'AIzaSyDMh18_svWqs2IT89F8yXebwfjxNZUOJeY',
      'AIzaSyBdS4niOVhS9SHFBNh3VhYg-XdGwqSuwrA'
    ];
    var index = Math.round((keys.length - 1) * Math.random());
    var key = keys[index];
    xhttp.open("POST", "https://www.googleapis.com/geolocation/v1/geolocate?key=" + key, true);
    xhttp.send();
}())