function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 5 seconds

document.addEventListener("DOMContentLoaded", () => {
  // Mental Health Awareness Pie Chart
  const mentalHealthPieCtx = document
    .getElementById("mentalHealthPieChart")
    .getContext("2d");
  new Chart(mentalHealthPieCtx, {
    type: "pie",
    data: {
      labels: ["Aware of Mental Health Resources", "Unaware of Resources"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#4A90E2", "#FFD700"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });

  // Stress Levels Bar Chart
  const stressLevelsBarCtx = document
    .getElementById("stressLevelsBarChart")
    .getContext("2d");
  new Chart(stressLevelsBarCtx, {
    type: "bar",
    data: {
      labels: ["Very Low", "Low", "Moderate", "High", "Very High"],
      datasets: [
        {
          label: "Percentage of Students",
          data: [5, 15, 40, 25, 15],
          backgroundColor: "#4A90E2",
          borderColor: "#00509e",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage (%)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Stress Levels",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Accessibility of Mental Health Support Line Chart
  const supportAccessibilityCtx = document
    .getElementById("supportAccessibilityLineChart")
    .getContext("2d");
  new Chart(supportAccessibilityCtx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Support Accessibility (%)",
          data: [50, 55, 60, 68, 70, 75],
          borderColor: "#4A90E2",
          fill: false,
          tension: 0.2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage (%)",
          },
        },
      },
    },
  });

  // Sleep Quality Doughnut Chart
  const sleepQualityCtx = document
    .getElementById("sleepQualityDoughnutChart")
    .getContext("2d");
  new Chart(sleepQualityCtx, {
    type: "doughnut",
    data: {
      labels: ["Excellent", "Good", "Fair", "Poor"],
      datasets: [
        {
          data: [15, 45, 25, 15],
          backgroundColor: ["#4A90E2", "#FFD700", "#f98b60", "#a1a1a1"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });
});
