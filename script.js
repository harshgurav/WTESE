document.addEventListener('DOMContentLoaded', function() {
    var adviceBtn = document.getElementById('adviceBtn');
    document.getElementById('calculateBtn').onclick = function() {
        var w = +document.getElementById('weight').value;
        var h = +document.getElementById('height').value / 100;
        if (w > 0 && h > 0) {
            var bmi = w / (h * h);
            var cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese';
            document.getElementById('bmiValue').textContent = bmi.toFixed(1);
            document.getElementById('bmiCategory').textContent = cat;
            document.getElementById('result').classList.remove('hidden');
            adviceBtn.style.display = 'inline-block';
            adviceBtn.onclick = function() {
                window.location.href = 'advice.html?cat=' + encodeURIComponent(cat);
            }
        } else {
            alert('Please enter valid weight and height');
        }
    }
});

