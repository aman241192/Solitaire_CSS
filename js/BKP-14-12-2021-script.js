$(document).ready(function () {
  $(".navbar_btn").click(function () {
    // $(this).toggleClass("fas fa-times ")
    $(".menu").slideToggle(700);
  })

  // .toggleClass("active")
  $(document).ready(function () {
    $(".faq_box_question__question").click(function () {
      $(this).children().find(".clock").removeClass("rotate");
      $(this).children().find(".clock").parent().css("background", "none");

      $(this).children().find(".clock")
      if ($('.faq_box_question_answer').is(':visible')) {
        $(".faq_box_question_answer").slideUp(300);
        $(".clock").removeClass("rotate")

        $(this).children().find(".clock").parent().css("background", "none");
      }
      if ($(this).next(".faq_box_question_answer").is(':visible')) {
        $(this).next(".faq_box_question_answer").slideUp(300);
        $(this).children().find(".clock").parent().css("background", "none");
      }
      else {
        $(this).next(".faq_box_question_answer").slideDown(300);
        $(this).children().find(".clock").addClass("rotate")
        $(this).children().find(".clock").parent().css("border", "url(./images/clockwallpaper.png)");
      }
    });
  });

  $(".sendmess").click(function () {
    let error = 0;
    let nameformat = /^[a-zA-Z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numberformat = "[0-9]+\\.?";

    let name = $("#fullname").val();
    let email = $("#email").val();
    let number = $("#number").val();
    let messege = $("#messege").val();

    if (name == "" && email == "" && number == "") {
      $(".name_error_messege").html("Invalid");
      $(".email_error_messege").html("Invalid");
      $(".number_error_messege").html("Invalid");
      $(".messeger_error_messege").html("Invalid");
    }
    if (name == "" || name.length < 3 || !name.match(nameformat)) {
      $(".name_error_messege").html("Invalid");
      error++;
    }
    else {
      $(".name_error_messege").css("display", "none")
    }
    if (email == "" || email.length < 3 || !email.match(mailformat)) {
      $(".email_error_messege").html("Invalid");
      error++;
    }
    else {
      $(".email_error_messege").css("display", "none")
    }
    if (number == "" || number.length != 10 || !number.match(numberformat)) {
      $(".number_error_messege").html("Invalid");
      error++;
    }
    else {
      $(".number_error_messege").css("display", "none")
    }
    if (messege == "" || messege.length < 3) {
      $(".messeger_error_messege").html("Invalid");
      error++;
    }
    else {
      $(".messeger_error_messege").css("display", "none")
    }
    if (name.match(nameformat) && email.match(mailformat) && number.match(numberformat)) {
      console.log("Name=" + name)
      console.log("Email=" + email)
      console.log("Contact Number=" + number)
      console.log("Messege=" + messege)
      console.log("OK")
      console.log("Error=" + error)
      $("#sucess").html(" Sucess")
    }

    if (error == 0) {
      const person = {
        first_name: name,
        e_email: email,
        mob_number: number,
        messege: messege,
      }
      let arr = localStorage.getItem("entry") ? JSON.parse(localStorage.getItem("entry")) : [];
      arr.push(person);
      localStorage.setItem("entry", JSON.stringify(arr));
      console.log(arr);
      event.preventDefault();
    }
  });
});

