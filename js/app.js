$(document).ready(function() {

  var userApi = "https://randomuser.me/api/?nat=us,dk,fr,gb&exc=login&noinfo";
  var userOptions = {
  	dataType: 'json',
  	results: 12,
  };

  function displayPhotos(data) {
    var photoHTML = '';
    $.each(data.results,function(i,user) {
      photoHTML += '<div class="col-sm-6 col-lg-4 clearfix">';
          photoHTML += '<div class="card border-grey clearfix">';
            photoHTML += '<div class="card-link">';
              photoHTML += '<div class="profile-pic">';
                photoHTML += '<img src="' + user.picture.large + ' " class="img-circle img-responsive">';
              photoHTML += '</div>';
              photoHTML += '<div class="profile-info clearfix">';
                photoHTML += '<h2 class="name">' + user.name.first + " " + user.name.last + '</h2>';
                photoHTML += '<p class="email text-muted">' + user.email + '</p>';
                photoHTML += '<p class="location-city text-muted">' + user.location.city + '</p>';
                photoHTML += '<div class="is-modal">';
                photoHTML += '<hr>';
                photoHTML += '<p class="mobile-number text-muted">' + user.cell + '</p>';
                photoHTML += '<p class="location-street text-muted">' + user.location.street + ", " + user.location.state + ", " + user.location.postcode +'</p>';
                photoHTML += '<p class="dob text-muted">Birthday: ' + user.dob.substring(0,10) + '</p>';
                photoHTML += '</div>';
              photoHTML += '</div>';
            photoHTML += '</div>';
          photoHTML += '</div>';
      photoHTML += '</div>';
    });
    $('#photos').html(photoHTML);
  }
  $.getJSON(userApi, userOptions, displayPhotos);

  // Good approach?
  // $('body').on('click', 'a.myclass', function() {
  //     // do something
  // });

  $('body').on('click', '.card-link', function(){
    $(".modal-body").html("");
    $(this).clone().appendTo('#myModal .modal-body')
    $('#myModal').modal();
  });

  $(".modal").on("hidden.bs.modal", function() {
    $(".modal-body").html("");
  });

});