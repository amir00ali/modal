document.getElementById("confirm").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const search = document.getElementById("search").value;
    const isAlert = document.getElementById("alert").checked;
    const publishAd = document.getElementById("publishAd").checked;
    const coWorker = document.getElementById("coWorker").checked;
    const recruiter = document.getElementById("recruiter").checked;
    const other = document.getElementById("other").checked;

    console.log("شهر انتخاب شده:", city);
    console.log("عبارت جستجو:", search);
    console.log("اعلان:", isAlert);
    console.log("انتشار آگهی:", publishAd);
    console.log("همکار:", coWorker);
    console.log("کارفرمایان:", recruiter);
    console.log("آگهی:", other);
});

document.getElementById("cancel").addEventListener("click", () => {
    alert("فرم لغو شد.");
});

document.querySelector(".clear-text").addEventListener("click", () => {
    document.getElementById("alert").checked = false;
    document.getElementById("publishAd").checked = false;
    document.getElementById("coWorker").checked = false;
    document.getElementById("recruiter").checked = false;
    document.getElementById("other").checked = false;
    alert("همه گزینه‌ها حذف شدند.");
});

const checkboxes = document.querySelectorAll(".custom-checkbox");
const selectedLabel = document.getElementById("selected-label");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            const label = document.querySelector(`label[for=${event.target.id}]`).textContent;
            selectedLabel.textContent = label;
        } else {
            selectedLabel.textContent = "";
        }
    });
});
