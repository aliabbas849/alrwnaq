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
  var selectedProperty = document.querySelector('input[name="property"]:checked').value;
  alert('الاسم الكامل: ' + fullName + '\nالرقم الوطني: ' + nationalId + '\nالعقار المختار: ' + selectedProperty);
}