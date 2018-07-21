$(document).ready(() => {
  $('.deleteUser').on('click', deleteUser);
});

function deleteUser(){
  const confirmation = confirm('are you sure?');
  if (confirmation) {
    $.ajax({
      type:'DELETE',
      url: `books/delete/${$(this).data('id')}`
    }).done((response) => {
      
    });
    window.location.replace('/');
  } else {
    return false;
  }
}



