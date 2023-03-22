"use strict";

let reportData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self-Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let priviousTime = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

let priviousTimeTitles = document.querySelectorAll(".previous-time-title");
let priviousTimeValues = document.querySelectorAll(".previous-time-value");
let currentTimeValues = document.querySelectorAll(".current-time");
let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    let text = button.value;

    priviousTimeTitles.forEach((title) => {
      title.innerHTML = priviousTime[text];
    });

    for (let i = 0; i < reportData.length; i++) {
      priviousTimeValues[i].innerHTML = reportData[i].timeframes[text].previous;
      currentTimeValues[
        i
      ].innerHTML = `${reportData[i].timeframes[text].current}hrs`;
    }

    button.classList.add("active");
    buttons.forEach(function (button) {
      if (button.value !== text) {
        button.classList.remove("active");
      }
    });
  });
});

// FOR HOVER EFFECT ON REPORT SUMMARY

let reportSummaries = document.querySelectorAll(".report-summary");
let svgButtons = document.querySelectorAll(".svg-button");

reportSummaries.forEach((reportSummary) => {
  reportSummary.addEventListener("mouseover", () => {
    reportSummary.classList.add("color1");
  });
});

reportSummaries.forEach((reportSummary) => {
  reportSummary.addEventListener("mouseout", () => {
    reportSummary.classList.remove("color1");
  });
});

svgButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    reportSummaries.forEach((reportSummary) => {
      reportSummary.classList.add("color2");
    });
  });
});

svgButtons.forEach((button) => {
  button.addEventListener("mouseout", () => {
    reportSummaries.forEach((reportSummary) => {
      reportSummary.classList.remove("color2");
    });
  });
});
