var locationE = document.querySelector("#location");
function getLocation(position) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation không được hỗ trợ bởi trình duyệt này");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
    locationE.innerHTML =`Latitude: ${latitude} <br>Longitude: ${longitude} `
}
