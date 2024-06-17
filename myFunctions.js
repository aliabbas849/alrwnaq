function toggleDetails(checkbox, detailsId) {
      var allDetails = document.querySelectorAll('div[id^="details"]');
      for (var i = 0; i < allDetails.length; i++) {
        allDetails[i].style.display = 'none';
      }
      var details = document.getElementById(detailsId);
      if (checkbox.checked) {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    }
 function goToPurchaseForm() {
      var radios = document.querySelectorAll('input[type="radio"][name="property"]');
      var selected = false;
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = true;
          break;
        }
      }
      if (selected) {
        var purchaseForm = document.getElementById('purchaseForm');
        purchaseForm.style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        alert('الرجاء اختيار عقار للمتابعة.');
        return false; // منع تحديث الصفحة
      }
return false; // منع تحديث الصفحة
    }

function submitForm() {
  var fullName = document.getElementById('fullName').value;
  var nationalId = document.getElementById('nationalId').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var email = document.getElementById('email').value;
  var birthDate = document.getElementById('birthDate').value;
  var selectedProperty = document.querySelector('input[name="property"]:checked').value;
  
  // التحقق من صحة رقم الهاتف والرقم الوطني
  var phonePattern = /^09\d{8}$/; // يجب أن يبدأ بـ "09" ويتبعه 8 أرقام
  var nationalIdPattern = /^\d{11}$/; // يجب أن يكون 11 رقمًا
  
  if (!phonePattern.test(mobileNumber)) {
    alert('رقم الموبايل يجب أن يكون من 10 أرقام ويبدأ بـ "09"');
    return false;
  }
  
  if (!nationalIdPattern.test(nationalId)) {
    alert('الرقم الوطني يجب أن يكون من 11 رقمًا');
    return false;
  }
  
  alert('تم أستلام طلبك يا: ' + fullName + '\nرقمك الوطني هو: ' + nationalId + '\nتاريخ ميلادك هو: ' + birthDate + '\nبريدك الألكتروني\n:' + email + '\nلقد قمت باختيار العقار: ' + selectedProperty + '\nسيتم الاتصال بك على رقمك التالي خلال 24 ساعة\n' + mobileNumber + '\n ملاحظة: يرجى التأكد من المعلومات المدخلة أعلاه لأنه سيتم التواصل معك عبر أحد وسائل التواصل التي أدخلتها لذلك نرجوا منك التأكد وأن كان هناك خطأ يرجعى أعادة أرسال النوذج مرة أخرى\n الرونق للعقارات.');

}