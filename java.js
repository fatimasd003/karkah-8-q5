function myFunction() {
  var m1;
  var m2 =confirm("آیا از ارسال این اطلاعات اطمینان دارید؟");
  if (m2 == true) {
    m1 = "فرایند ارسال با موفقیت انجام شد";
  } else {
    m1= "ارسال ناموفق بود";
  }
  alert(m1); 
  document.getElementById("demo").innerHTML = m1;
}