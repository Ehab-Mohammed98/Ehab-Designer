<select id="language">
    <option value="en">English</option>
    <option value="ar">العربية</option>
</select>

<h1 id="title">Welcome to my website</h1>
<p id="description">
    We provide professional design services.
</p>

<script>
const language = document.getElementById("language");

language.addEventListener("change", function () {

    if (this.value === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
    }

});
</script>
