
  function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("result");

    if (q1) {
      if (q1.value === "fossil_fuels") {
        result.innerHTML = "Correct! Burning fossil fuels is the primary cause.";
      } else {
        result.innerHTML = "Incorrect. The primary cause is burning fossil fuels.";
      }
    } else {
      result.innerHTML = "Please select an answer.";
    }
  }

    function calculateFootprint() {
        const miles = document.getElementById("miles").value;
        const footprint = miles * 0.411; // Average CO2 emissions per mile driven (kg CO2)
        document.getElementById("footprint").textContent = footprint.toFixed(2);
      }

      var ctx = document.getElementById('climateChart').getContext('2d');
      var climateChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2000', '2005', '2010', '2015', '2020'],
          datasets: [{
            label: 'Average Global Temperature (°C)',
            data: [0.2, 0.3, 0.6, 0.9, 1.1],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });