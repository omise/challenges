$(document).on("ready", function () {

  $("#donate").submit(function () {

    var form = $(this);

    // Ensure that the token field is empty first.
    form.find("[name=omise_token]").val(null);

    // Disable the submit button to avoid repeated click.
    form.find("input[type=submit]").prop("disabled", true);

    // Serialize the form fields into a valid card object.
    var card = {
      "name": form.find("[data-omise=holder_name]").val(),
      "number": form.find("[data-omise=number]").val(),
      "expiration_month": form.find("[data-omise=expiration_month]").val(),
      "expiration_year": form.find("[data-omise=expiration_year]").val(),
      "security_code": form.find("[data-omise=security_code]").val()
    };

    // Send a request to create a token then trigger the callback function once
    // a response is received from Omise.
    //
    // Note that the response could be an error and this needs to be handled 
    // within the callback.
    Omise.createToken("card", card, function (statusCode, response) {
      if (response.object == "error") {
        // Display an error message.
        $(".cc_error").html(response.message);

        // Re-enable the submit button.
        form.find("input[type=submit]").prop("disabled", false);
      } else {
        // Then fill the omise_token.
        form.find("[name=omise_token]").val(response.id);

        // And submit the form.
        form.get(0).submit();
      };
    });

    // Prevent the form from being submitted;
    return false;

  });

});
