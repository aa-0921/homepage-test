$(document).ready(function () {
    $("#my-form").submit(function (event) {
      var formData = $("#my-form").serialize();
      console.log("formData::::::::", formData);
      $.ajax({
        url:
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSepbhWQ2-zvboaLtI-TMEFf7Fj2rMxacDIIM_gvrAHpLXtkbA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            console.log("0: function () {時の処理");
            $(".end-message").slideDown();
            $(".form-submit").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            console.log(" 200: function () {時の処理");
            $(".false-message").slideDown();
          },
        },
      });
      event.preventDefault();
    });
  });