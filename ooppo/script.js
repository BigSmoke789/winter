// دالة لعرض النص بحروف متتابعة
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById('title');
    let text = "Winter is Coming";
    let index = 0;

    function showText() {
        if (index < text.length) {
            title.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(showText, 300); // تأخير 300 مللي ثانية بين كل حرف
        } else {
            // بعد اكتمال النص، تبدأ القطرات في السقوط
            startRain();
        }
    }

    showText();
});

// دالة لإضافة قطرات المطر
function startRain() {
    const rainContainer = document.getElementById('rain-container');
    
    setInterval(() => {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain-drop');
        rainDrop.style.left = Math.random() * 100 + 'vw'; // موقع عشوائي أفقي
        rainDrop.style.animationDuration = 1 + Math.random() * 2 + 's'; // مدة سقوط عشوائية
        rainContainer.appendChild(rainDrop);

        // إزالة القطرة بعد انتهاء الحركة
        setTimeout(() => {
            rainDrop.remove();
        }, 3000);
    }, 100);
}// بعد التأكد من تحميل الصفحة
window.onload = function() {
    const windSound = document.getElementById('wind-sound');
    windSound.play();
}; 