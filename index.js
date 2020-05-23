var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "5mm",
    contents: '<div style="text-align: center;color: red"></div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "",
      2: "Second page", // Any page number is working. 1-based index
      3: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "",
    },
  },
};

const device = [
  { deviceType: "DESKTOP", estimatedMinutesWatched: 934, views: 1785 },
  { deviceType: "GAME_CONSOLE", estimatedMinutesWatched: 173, views: 330 },
  { deviceType: "MOBILE", estimatedMinutesWatched: 2007, views: 3822 },
  { deviceType: "TABLET", estimatedMinutesWatched: 678, views: 1293 },
  { deviceType: "TV", estimatedMinutesWatched: 398, views: 760 },
];

const mobile = device.find((e) => {
  return e.deviceType === "MOBILE";
});
const mobileViews = mobile.views;
// console.log(mobileViews)

const desktop = device.find((e) => {
  return e.deviceType === "DESKTOP";
});
const desktopViews = desktop.views;
// console.log(desktopViews)

const tv = device.find((e) => {
  return e.deviceType === "TV";
});
const tvViews = tv.views;
// console.log(tvViews)

const gameConsole = device.find((e) => {
  return e.deviceType === "GAME_CONSOLE";
});
const gameConsoleViews = gameConsole.views;
// console.log(gameConsoleViews)

const tablet = device.find((e) => {
  return e.deviceType === "TABLET";
});
const tabletViews = tablet.views;
// console.log(tabletViews);

// const total = device.reduce((currentTotal, item)=> {
//     return item.estimatedMinutesWatched + currentTotal
// }, 0)

const mobileViewsAverage = ((mobileViews / 4000) * 100).toFixed(2);
// console.log(mobileViewsAverage)

const desktopViewsAverage = ((desktopViews / 4000) * 100).toFixed(2);
// console.log(desktopViewsAverage)

const tvViewsAverage = ((tvViews / 4000) * 100).toFixed(2);
// console.log(tvViewsAverage)

const tabletViewsAverage = ((tabletViews / 4000) * 100).toFixed(2);
// console.log(tabletViewsAverage)

const gameConsoleViewsAverage = ((gameConsoleViews / 4000) * 100).toFixed(2);
// console.log(gameConsoleViewsAverage)

//demographic
const demographic = [
  { ageGroup: "age18-24", gender: "female", viewerPercentage: 11.5 },
  { ageGroup: "age25-34", gender: "female", viewerPercentage: 12.1 },
  { ageGroup: "age35-44", gender: "female", viewerPercentage: 6.8 },
  { ageGroup: "age45-54", gender: "female", viewerPercentage: 3.4 },
  { ageGroup: "age55-64", gender: "female", viewerPercentage: 1.3 },
  { ageGroup: "age65-", gender: "female", viewerPercentage: 1.9 },
  { ageGroup: "age18-24", gender: "male", viewerPercentage: 23.1 },
  { ageGroup: "age25-34", gender: "male", viewerPercentage: 21.2 },
  { ageGroup: "age35-44", gender: "male", viewerPercentage: 11.9 },
  { ageGroup: "age45-54", gender: "male", viewerPercentage: 4 },
  { ageGroup: "age55-64", gender: "male", viewerPercentage: 0.9 },
  { ageGroup: "age65-", gender: "male", viewerPercentage: 1.7 },
];

const femaleGroupData = demographic.filter((e) => {
  return e.gender === "female";
});
// console.log(femaleGroupData);
const femalePercentage = femaleGroupData.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(femalePercentage)

const maleGroupData = demographic.filter((e) => {
  return e.gender === "male";
});
// console.log(maleGroupData);
const malePercentage = maleGroupData.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(malePercentage)

//for chart
const ageGroupData1 = demographic.filter((e) => {
  return e.ageGroup === "age18-24";
});
// console.log(ageGroupData1);
const totalageGroupData1 = ageGroupData1.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData1);
const viewsageGroupData1 = ((totalageGroupData1 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData1);

const ageGroupData2 = demographic.filter((e) => {
  return e.ageGroup === "age25-34";
});
// console.log(ageGroupData2);

const totalageGroupData2 = ageGroupData2.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData2);
const viewsageGroupData2 = ((totalageGroupData2 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData2);

const ageGroupData3 = demographic.filter((e) => {
  return e.ageGroup === "age35-44";
});
// console.log(ageGroupData3);
const totalageGroupData3 = ageGroupData3.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData3);
const viewsageGroupData3 = ((totalageGroupData3 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData3);

const ageGroupData4 = demographic.filter((e) => {
  return e.ageGroup === "age45-54";
});
// console.log(ageGroupData4);

const totalageGroupData4 = ageGroupData4.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData4);
const viewsageGroupData4 = ((totalageGroupData4 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData4);

const ageGroupData5 = demographic.filter((e) => {
  return e.ageGroup === "age55-64";
});
// console.log(ageGroupData5);

const totalageGroupData5 = ageGroupData5.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData5);
const viewsageGroupData5 = ((totalageGroupData5 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData5);

const ageGroupData6 = demographic.filter((e) => {
  return e.ageGroup === "age65-";
});
// console.log(ageGroupData6);

const totalageGroupData6 = ageGroupData6.reduce((currentTotal, e) => {
  return e.viewerPercentage + currentTotal;
}, 0);
// console.log(totalageGroupData6);
const viewsageGroupData6 = ((totalageGroupData6 * 4000) / 100).toFixed(2);
// console.log(viewsageGroupData6);

const audiance = [
  {
    elapsedVideoTimeRatio: 0.01,
    audienceWatchRatio: 1.0087000000000002,
    relativeRetentionPerformance: 0.2571,
  },
  {
    elapsedVideoTimeRatio: 0.02,
    audienceWatchRatio: 1.0039,
    relativeRetentionPerformance: 0.23020000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.03,
    audienceWatchRatio: 0.9913,
    relativeRetentionPerformance: 0.20405,
  },
  {
    elapsedVideoTimeRatio: 0.04,
    audienceWatchRatio: 0.9887,
    relativeRetentionPerformance: 0.18070000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.05,
    audienceWatchRatio: 0.985,
    relativeRetentionPerformance: 0.16145000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.06,
    audienceWatchRatio: 0.9831,
    relativeRetentionPerformance: 0.14679999999999999,
  },
  {
    elapsedVideoTimeRatio: 0.07,
    audienceWatchRatio: 0.9789,
    relativeRetentionPerformance: 0.13645000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.08,
    audienceWatchRatio: 0.9754999999999999,
    relativeRetentionPerformance: 0.1295,
  },
  {
    elapsedVideoTimeRatio: 0.09,
    audienceWatchRatio: 0.9732,
    relativeRetentionPerformance: 0.12514999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.1,
    audienceWatchRatio: 0.9706,
    relativeRetentionPerformance: 0.12244999999999995,
  },
  {
    elapsedVideoTimeRatio: 0.11,
    audienceWatchRatio: 0.9662999999999999,
    relativeRetentionPerformance: 0.12075000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.12,
    audienceWatchRatio: 0.9645,
    relativeRetentionPerformance: 0.11969999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.13,
    audienceWatchRatio: 0.9618000000000001,
    relativeRetentionPerformance: 0.119,
  },
  {
    elapsedVideoTimeRatio: 0.14,
    audienceWatchRatio: 0.958,
    relativeRetentionPerformance: 0.1185,
  },
  {
    elapsedVideoTimeRatio: 0.15,
    audienceWatchRatio: 0.956,
    relativeRetentionPerformance: 0.11814999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.16,
    audienceWatchRatio: 0.9543,
    relativeRetentionPerformance: 0.1179,
  },
  {
    elapsedVideoTimeRatio: 0.17,
    audienceWatchRatio: 0.9354,
    relativeRetentionPerformance: 0.11774999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.18,
    audienceWatchRatio: 0.9140999999999999,
    relativeRetentionPerformance: 0.11759999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.19,
    audienceWatchRatio: 0.8755,
    relativeRetentionPerformance: 0.1175,
  },
  {
    elapsedVideoTimeRatio: 0.2,
    audienceWatchRatio: 0.7959999999999999,
    relativeRetentionPerformance: 0.11745,
  },
  {
    elapsedVideoTimeRatio: 0.21,
    audienceWatchRatio: 0.7602,
    relativeRetentionPerformance: 0.11745,
  },
  {
    elapsedVideoTimeRatio: 0.22,
    audienceWatchRatio: 0.7367,
    relativeRetentionPerformance: 0.11745,
  },
  {
    elapsedVideoTimeRatio: 0.23,
    audienceWatchRatio: 0.6962,
    relativeRetentionPerformance: 0.11755000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.24,
    audienceWatchRatio: 0.6779000000000001,
    relativeRetentionPerformance: 0.11765000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.25,
    audienceWatchRatio: 0.6648999999999999,
    relativeRetentionPerformance: 0.11774999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.26,
    audienceWatchRatio: 0.6424,
    relativeRetentionPerformance: 0.11795,
  },
  {
    elapsedVideoTimeRatio: 0.27,
    audienceWatchRatio: 0.6302,
    relativeRetentionPerformance: 0.11814999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.28,
    audienceWatchRatio: 0.6202000000000001,
    relativeRetentionPerformance: 0.11845,
  },
  {
    elapsedVideoTimeRatio: 0.29,
    audienceWatchRatio: 0.6081,
    relativeRetentionPerformance: 0.11875000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.3,
    audienceWatchRatio: 0.5946,
    relativeRetentionPerformance: 0.11914999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.31,
    audienceWatchRatio: 0.5872999999999999,
    relativeRetentionPerformance: 0.11954999999999999,
  },
  {
    elapsedVideoTimeRatio: 0.32,
    audienceWatchRatio: 0.5778,
    relativeRetentionPerformance: 0.12005000000000005,
  },
  {
    elapsedVideoTimeRatio: 0.33,
    audienceWatchRatio: 0.5678,
    relativeRetentionPerformance: 0.12060000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.34,
    audienceWatchRatio: 0.5633,
    relativeRetentionPerformance: 0.12119999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.35,
    audienceWatchRatio: 0.5569,
    relativeRetentionPerformance: 0.12185000000000001,
  },
  {
    elapsedVideoTimeRatio: 0.36,
    audienceWatchRatio: 0.5489,
    relativeRetentionPerformance: 0.12259999999999999,
  },
  {
    elapsedVideoTimeRatio: 0.37,
    audienceWatchRatio: 0.5426,
    relativeRetentionPerformance: 0.12345,
  },
  {
    elapsedVideoTimeRatio: 0.38,
    audienceWatchRatio: 0.5393,
    relativeRetentionPerformance: 0.12435000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.39,
    audienceWatchRatio: 0.5312,
    relativeRetentionPerformance: 0.1254,
  },
  {
    elapsedVideoTimeRatio: 0.4,
    audienceWatchRatio: 0.5277000000000001,
    relativeRetentionPerformance: 0.12655,
  },
  {
    elapsedVideoTimeRatio: 0.41,
    audienceWatchRatio: 0.5243,
    relativeRetentionPerformance: 0.12784999999999996,
  },
  {
    elapsedVideoTimeRatio: 0.42,
    audienceWatchRatio: 0.5176,
    relativeRetentionPerformance: 0.12929999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.43,
    audienceWatchRatio: 0.5146999999999999,
    relativeRetentionPerformance: 0.13079999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.44,
    audienceWatchRatio: 0.5121,
    relativeRetentionPerformance: 0.13244999999999996,
  },
  {
    elapsedVideoTimeRatio: 0.45,
    audienceWatchRatio: 0.5061,
    relativeRetentionPerformance: 0.13420000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.46,
    audienceWatchRatio: 0.5029,
    relativeRetentionPerformance: 0.136,
  },
  {
    elapsedVideoTimeRatio: 0.47,
    audienceWatchRatio: 0.5008,
    relativeRetentionPerformance: 0.13784999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.48,
    audienceWatchRatio: 0.49689999999999995,
    relativeRetentionPerformance: 0.13975000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.49,
    audienceWatchRatio: 0.49369999999999997,
    relativeRetentionPerformance: 0.1417,
  },
  {
    elapsedVideoTimeRatio: 0.5,
    audienceWatchRatio: 0.4913,
    relativeRetentionPerformance: 0.1437,
  },
  {
    elapsedVideoTimeRatio: 0.51,
    audienceWatchRatio: 0.4874,
    relativeRetentionPerformance: 0.1457,
  },
  {
    elapsedVideoTimeRatio: 0.52,
    audienceWatchRatio: 0.4851,
    relativeRetentionPerformance: 0.1478,
  },
  {
    elapsedVideoTimeRatio: 0.53,
    audienceWatchRatio: 0.4832,
    relativeRetentionPerformance: 0.14990000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.54,
    audienceWatchRatio: 0.4799,
    relativeRetentionPerformance: 0.1521,
  },
  {
    elapsedVideoTimeRatio: 0.55,
    audienceWatchRatio: 0.4769,
    relativeRetentionPerformance: 0.15435000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.56,
    audienceWatchRatio: 0.474,
    relativeRetentionPerformance: 0.15655000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.57,
    audienceWatchRatio: 0.47130000000000005,
    relativeRetentionPerformance: 0.15880000000000005,
  },
  {
    elapsedVideoTimeRatio: 0.58,
    audienceWatchRatio: 0.46840000000000004,
    relativeRetentionPerformance: 0.16094999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.59,
    audienceWatchRatio: 0.4669,
    relativeRetentionPerformance: 0.16310000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.6,
    audienceWatchRatio: 0.46490000000000004,
    relativeRetentionPerformance: 0.16515000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.61,
    audienceWatchRatio: 0.46140000000000003,
    relativeRetentionPerformance: 0.16704999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.62,
    audienceWatchRatio: 0.4594,
    relativeRetentionPerformance: 0.1689,
  },
  {
    elapsedVideoTimeRatio: 0.63,
    audienceWatchRatio: 0.4578,
    relativeRetentionPerformance: 0.17064999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.64,
    audienceWatchRatio: 0.4546,
    relativeRetentionPerformance: 0.17229999999999995,
  },
  {
    elapsedVideoTimeRatio: 0.65,
    audienceWatchRatio: 0.45289999999999997,
    relativeRetentionPerformance: 0.17385,
  },
  {
    elapsedVideoTimeRatio: 0.66,
    audienceWatchRatio: 0.4518,
    relativeRetentionPerformance: 0.17534999999999995,
  },
  {
    elapsedVideoTimeRatio: 0.67,
    audienceWatchRatio: 0.4489,
    relativeRetentionPerformance: 0.17674999999999996,
  },
  {
    elapsedVideoTimeRatio: 0.68,
    audienceWatchRatio: 0.4471,
    relativeRetentionPerformance: 0.17804999999999999,
  },
  {
    elapsedVideoTimeRatio: 0.69,
    audienceWatchRatio: 0.4457,
    relativeRetentionPerformance: 0.17920000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.7,
    audienceWatchRatio: 0.4432,
    relativeRetentionPerformance: 0.18030000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.71,
    audienceWatchRatio: 0.4424,
    relativeRetentionPerformance: 0.18125000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.72,
    audienceWatchRatio: 0.4409,
    relativeRetentionPerformance: 0.18205,
  },
  {
    elapsedVideoTimeRatio: 0.73,
    audienceWatchRatio: 0.43799999999999994,
    relativeRetentionPerformance: 0.18274999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.74,
    audienceWatchRatio: 0.43670000000000003,
    relativeRetentionPerformance: 0.18329999999999996,
  },
  {
    elapsedVideoTimeRatio: 0.75,
    audienceWatchRatio: 0.4355,
    relativeRetentionPerformance: 0.18364999999999998,
  },
  {
    elapsedVideoTimeRatio: 0.76,
    audienceWatchRatio: 0.433,
    relativeRetentionPerformance: 0.1839,
  },
  {
    elapsedVideoTimeRatio: 0.77,
    audienceWatchRatio: 0.4316,
    relativeRetentionPerformance: 0.18395,
  },
  {
    elapsedVideoTimeRatio: 0.78,
    audienceWatchRatio: 0.43090000000000006,
    relativeRetentionPerformance: 0.18385,
  },
  {
    elapsedVideoTimeRatio: 0.79,
    audienceWatchRatio: 0.429,
    relativeRetentionPerformance: 0.18359999999999999,
  },
  {
    elapsedVideoTimeRatio: 0.8,
    audienceWatchRatio: 0.4265,
    relativeRetentionPerformance: 0.18315000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.81,
    audienceWatchRatio: 0.4255,
    relativeRetentionPerformance: 0.18255,
  },
  {
    elapsedVideoTimeRatio: 0.82,
    audienceWatchRatio: 0.4238,
    relativeRetentionPerformance: 0.18175000000000002,
  },
  {
    elapsedVideoTimeRatio: 0.83,
    audienceWatchRatio: 0.4218,
    relativeRetentionPerformance: 0.1809,
  },
  {
    elapsedVideoTimeRatio: 0.84,
    audienceWatchRatio: 0.4215,
    relativeRetentionPerformance: 0.1799,
  },
  {
    elapsedVideoTimeRatio: 0.85,
    audienceWatchRatio: 0.4204,
    relativeRetentionPerformance: 0.17880000000000001,
  },
  {
    elapsedVideoTimeRatio: 0.86,
    audienceWatchRatio: 0.4181,
    relativeRetentionPerformance: 0.17765000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.87,
    audienceWatchRatio: 0.4172,
    relativeRetentionPerformance: 0.17645000000000005,
  },
  {
    elapsedVideoTimeRatio: 0.88,
    audienceWatchRatio: 0.41600000000000004,
    relativeRetentionPerformance: 0.17515000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.89,
    audienceWatchRatio: 0.4143,
    relativeRetentionPerformance: 0.17385,
  },
  {
    elapsedVideoTimeRatio: 0.9,
    audienceWatchRatio: 0.4139,
    relativeRetentionPerformance: 0.1725,
  },
  {
    elapsedVideoTimeRatio: 0.91,
    audienceWatchRatio: 0.4139,
    relativeRetentionPerformance: 0.17109999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.92,
    audienceWatchRatio: 0.4133,
    relativeRetentionPerformance: 0.16969999999999996,
  },
  {
    elapsedVideoTimeRatio: 0.93,
    audienceWatchRatio: 0.4132,
    relativeRetentionPerformance: 0.16825,
  },
  {
    elapsedVideoTimeRatio: 0.94,
    audienceWatchRatio: 0.4131,
    relativeRetentionPerformance: 0.16685,
  },
  {
    elapsedVideoTimeRatio: 0.95,
    audienceWatchRatio: 0.4127,
    relativeRetentionPerformance: 0.16545000000000004,
  },
  {
    elapsedVideoTimeRatio: 0.96,
    audienceWatchRatio: 0.41200000000000003,
    relativeRetentionPerformance: 0.16405000000000003,
  },
  {
    elapsedVideoTimeRatio: 0.97,
    audienceWatchRatio: 0.4096,
    relativeRetentionPerformance: 0.1628,
  },
  {
    elapsedVideoTimeRatio: 0.98,
    audienceWatchRatio: 0.40369999999999995,
    relativeRetentionPerformance: 0.16159999999999997,
  },
  {
    elapsedVideoTimeRatio: 0.99,
    audienceWatchRatio: 0.4019,
    relativeRetentionPerformance: 0.16060000000000002,
  },
  {
    elapsedVideoTimeRatio: 1,
    audienceWatchRatio: 0.0015,
    relativeRetentionPerformance: 0.15975,
  },
];

const audianceFirstPhase = audiance.find((e)=> {
  return e.elapsedVideoTimeRatio === 0.08
})
// console.log(audianceFirstPhase)
const audianceFirstPhasePercentage = ( audianceFirstPhase.relativeRetentionPerformance * 100 ).toFixed(2)
// console.log(audianceFirstPhasePercentage, 'audianceFirstPhasePercentage')


const audianceSecondPhase = audiance.find((e)=> {
  return e.elapsedVideoTimeRatio === 0.16
})
// console.log(audianceSecondPhase)
const audianceSecondPhasePercentage = ( audianceSecondPhase.relativeRetentionPerformance * 100 ).toFixed(2)
// console.log(audianceSecondPhasePercentage, 'audianceSecondPhasePercentage')

const audianceThirdPhase = audiance.find((e)=> {
  return e.elapsedVideoTimeRatio === 0.24
})
// console.log(audianceThirdPhase)
const audianceThirdPhasePercentage = ( audianceThirdPhase.relativeRetentionPerformance * 100 ).toFixed(2)
// console.log(audianceThirdPhasePercentage, 'audianceThirdPhasePercentage')

// const audianceFourthPhase = audiance.find((e)=> {
//   return e.elapsedVideoTimeRatio === 0.16
// })
// console.log(audianceFourthPhase)
// const audianceFourthPhasePercentage = ( audianceFourthPhase.relativeRetentionPerformance * 100 ).toFixed(2)
//  console.log(audianceFourthPhasePercentage)

var document = {
  html: html,
  data: {
    // device: device,
    // avg : avg,
    mobileViews,
    tvViews,
    desktopViews,
    tabletViews,
    gameConsoleViews,
    mobileViewsAverage,
    gameConsoleViewsAverage,
    desktopViewsAverage,
    tabletViewsAverage,
    tvViewsAverage,
    femalePercentage,
    malePercentage,
    viewsageGroupData1,
    viewsageGroupData2,
    viewsageGroupData3,
    viewsageGroupData4,
    viewsageGroupData5,
    viewsageGroupData6,
    audianceFirstPhasePercentage,
    audianceSecondPhasePercentage,
    audianceThirdPhasePercentage
  },
  path: "./output.pdf",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
