
// ضع رقم واتساب الخاص بك هنا
// مثال: 9665XXXXXXXX
const whatsappNumber = "9665XXXXXXXX";

const service = document.getElementById("service");
const dynamicFields = document.getElementById("dynamicFields");
const form = document.getElementById("requestForm");

const services = {
  graphic: `
    <div class="dynamic-field">
      <label>نوع التصميم</label>
      <select id="designType" required>
        <option value="">اختر نوع التصميم</option>
        <option>تصميم شعار</option>
        <option>هوية بصرية</option>
        <option>منشورات سوشيال ميديا</option>
        <option>بطاقة أعمال</option>
        <option>تصميم مطبوعات</option>
        <option>تصميم إعلانات</option>
      </select>
    </div>

    <div class="dynamic-field">
      <label>مقاس التصميم</label>
      <input id="size" placeholder="مثال: 1080 × 1080 px">
    </div>

    <div class="dynamic-field">
      <label>عدد التصاميم</label>
      <input id="quantity" type="number" min="1"
        placeholder="أدخل العدد">
    </div>

    <div class="dynamic-field">
      <label>الألوان المفضلة</label>
      <input id="colors" placeholder="مثال: أزرق وأبيض">
    </div>
  `,

  web: `
    <div class="dynamic-field">
      <label>نوع الموقع</label>
      <select id="websiteType" required>
        <option value="">اختر نوع الموقع</option>
        <option>موقع شركة</option>
        <option>متجر إلكتروني</option>
        <option>موقع شخصي</option>
        <option>صفحة هبوط</option>
        <option>منصة إلكترونية</option>
      </select>
    </div>

    <div class="dynamic-field">
      <label>نوع الخدمة</label>
      <select id="webService" required>
        <option>تصميم واجهات UI/UX فقط</option>
        <option>تصميم وبرمجة الموقع</option>
        <option>تطوير موقع موجود</option>
      </select>
    </div>

    <div class="dynamic-field">
      <label>عدد الصفحات</label>
      <input id="pages" type="number" min="1"
        placeholder="مثال: 5">
    </div>

    <div class="dynamic-field">
      <label>هل لديك هوية بصرية؟</label>
      <select id="identity">
        <option>نعم</option>
        <option>لا</option>
        <option>أحتاج تصميم هوية</option>
      </select>
    </div>
  `
};

service.addEventListener("change", function () {
  dynamicFields.innerHTML = services[this.value] || "";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const messageBox = document.getElementById("message");

  if (!/^966\d{9}$/.test(whatsappNumber)) {
    messageBox.textContent =
      "يرجى وضع رقم واتساب صحيح بصيغة دولية في ملف JavaScript.";
    return;
  }

  const selectedService =
    service.options[service.selectedIndex].text;

  let message = `
طلب خدمة جديدة

الخدمة: ${selectedService}

الاسم: ${document.getElementById("name").value}
الهاتف: ${document.getElementById("phone").value}
البريد: ${document.getElementById("email").value || "غير محدد"}

`;

  if (service.value === "graphic") {
    message += `
نوع التصميم: ${document.getElementById("designType").value}
المقاس: ${document.getElementById("size").value || "غير محدد"}
العدد: ${document.getElementById("quantity").value || "غير محدد"}
الألوان: ${document.getElementById("colors").value || "غير محددة"}
`;
  }

  if (service.value === "web") {
    message += `
نوع الموقع: ${document.getElementById("websiteType").value}
نوع الخدمة: ${document.getElementById("webService").value}
عدد الصفحات: ${document.getElementById("pages").value || "غير محدد"}
الهوية البصرية: ${document.getElementById("identity").value}
`;
  }

  message += `
تفاصيل المشروع:
${document.getElementById("details").value}

رابط الملفات:
${document.getElementById("files").value || "لا يوجد"}
`;

  const url =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
});
