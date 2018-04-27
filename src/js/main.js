function initMap() {

        var kolartorp = {lat: 59.177222, lng: 18.122778};
        var borlange = {lat: 60.4824, lng: 15.4463};
        var karlstad = {lat: 59.402181, lng: 13.511498};
        var mjolby = {lat: 58.322691, lng: 15.133535};
        var nynashamn = {lat: 58.902926, lng: 17.946529};
        var alta = {lat: 59.255532, lng: 18.178067};
        var malmslatt = {lat: 58.413889, lng: 15.519444};
        var spangsholm = {lat: 58.3521298, lng: 15.235193};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:5,
          center: new google.maps.LatLng(59.826056,15.69152)
        });
        var marker = new google.maps.Marker({
          position: kolartorp,
          map: map
        });
        var marker = new google.maps.Marker({
            position: borlange,
            map: map
        });
        var marker = new google.maps.Marker({
            position: karlstad,
            map: map
        });
        var marker = new google.maps.Marker({
            position: mjolby,
            map: map
          });
          var marker = new google.maps.Marker({
            position: nynashamn,
            map: map
          });
          var marker = new google.maps.Marker({
            position: alta,
            map: map
          });
          var marker = new google.maps.Marker({
            position: malmslatt,
            map: map
          });
          var marker = new google.maps.Marker({
            position: spangsholm,
            map: map
          });
        
  

}