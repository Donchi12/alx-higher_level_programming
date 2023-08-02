// JavaScript script that add item, remove item and clear item



$('document').ready(function () {
  $('DIV#add_item').click(function () {
    $('UL.my_list').append('<li>Item</li>');
  });
  $('DIV#remove_item').click(function () {
    $('UL.my_list li:last').remove();
  });
  $('DIV#clear_list').click(function () {
    $('UL.my_list').empty();
  });
});

