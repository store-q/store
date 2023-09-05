$(document).on("click", ".send", function () {
  /* Form Input */
  var input_name = $("#name").val(),
    input_email = $("#email").val(),
    input_phone = $("#phone").val(),
    input_product = $("#product").val(),
    input_description = $("#description").val();

  /* Whatsapp Setting */
  var walink = "https://wa.me/",
    phone = "6287738539095",
    text = "Hello I want to order",
    text_yes = "Your order was successfully sent.",
    text_no = "Fill this form to order.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "https://wa.me/";
  }

  if (input_name != "" && input_phone != "" && input_product != "") {
    /* Whatsapp URL */
    var checkout_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      text +
      "%0A%0A" +
      "*Nama* : " +
      input_name +
      "%0A" +
      "*Email* : " +
      input_email +
      "%0A" +
      "*No. Whatsapp* : " +
      input_phone +
      "%0A" +
      "*Product* : " +
      input_product +
      "%0A" +
      "*Additional Note* : " +
      input_description +
      "%0A";

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<div class="alert alert-success">' + text_yes + "</div>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<div class="alert alert-danger">' + text_no + "</div>";
  }
});
