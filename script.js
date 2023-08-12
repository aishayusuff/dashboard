"use strict";

//Menu breadcrumb
const toggle = document.querySelector(".breadcrumb");
const nav = document.querySelector(".navigation");
const main = document.querySelector("main");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
});

//Charts
const doughnut = document.getElementById("doughnut");
const graph = document.getElementById("graph");

//donughnut
new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["Non-fiction", "Literary Fiction", "Young Adult", "Middle Grade"],
    datasets: [
      {
        label: "Book Genre by Popularity",
        data: [10, 65, 5, 20],
        backgroundColor: [
          "rgba(235,186,185,0.5)",
          "rgba(95,90,162,0.5)",
          "rgba(36,62,54, 0.5)",
          "rgba(123, 178, 217, 0.5)",
        ],
        hoverBackgroundColor: [
          "rgba(235,186,185,1)",
          "rgba(95,90,162,1)",
          "rgba(36,62,54, 1)",
          "rgba(123, 178, 217, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//graph
new Chart(graph, {
  type: "bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Earnings (£)",
        data: [25_500, 59_756, 8_590, 10_219],
        backgroundColor: [
          "rgba(247, 92, 3, 1)",
          "rgba(68, 255, 209, 1)",
          "rgba(35, 17, 35, 1)",
          "rgba(252, 255, 7, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
