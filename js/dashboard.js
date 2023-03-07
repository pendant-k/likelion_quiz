let members = [
  { name: "최멋사", count: 10, time: "2:30:12" },
  { name: "박멋사", count: 10, time: "3:40:32" },
  { name: "김멋사", count: 9, time: "3:56:40" },
  { name: "강멋사", count: 9, time: "3:56:39" },
  { name: "이멋사", count: 8, time: "1:40:24" },
  { name: "가멋사", count: 3, time: "2:00:56" },
  { name: "나멋사", count: 10, time: "3:40:23" },
  { name: "다멋사", count: 9, time: "3:51:45" },
  { name: "라멋사", count: 9, time: "1:40:23" },
  { name: "마멋사", count: 8, time: "2:01:09" },
  { name: "바멋사", count: 4, time: "3:40:12" },
  { name: "사멋사", count: 9, time: "3:36:67" },
  { name: "아멋사", count: 10, time: "1:40:34" },
];

const cardContainer = document.getElementById("card-container");
const cardContent = ` <div class="card-box">
    <div class="card" id="rank-card">
      <h5 class="rank"></h5>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <h5 class="name"></h5>
        </div>
        <div class="col-md-3">
          <h5 class="count"></h5>
        </div>
        <div class="col-md-3">
          <h5 class="time"></h5>
        </div>
      </div>
    </div>
    </div>`;
let sortedMembers;

//count 정렬
sortedMembers = members.sort(function (a, b) {
  return b.count - a.count;
});
//시간 변경
for (i = 0; i < members.length; i++) {
  const t = sortedMembers[i].time;
  const newTime =
    Number(t[0]) * 60 + Number(t[2] + t[3]) + 0.01 * Number(t[5] + t[6]);
  sortedMembers[i].newtime = newTime;
}

//시간 정렬
let n = 0;
let finalMembers = [];
for (i = 0; i < members.length; i++) {
  if (sortedMembers[i + 1] != null) {
    if (sortedMembers[i].count === sortedMembers[i + 1].count) {
      if (sortedMembers[i].newtime < sortedMembers[i + 1].newtime) {
        let temp = sortedMembers[i];
        sortedMembers[i] = sortedMembers[i + 1];
        sortedMembers[i + 1] = temp;
      }
    } else {
      for (k = n; k < i + 1; k++) {
        finalMembers[k] = sortedMembers[i - k + n];
      }
      n = i + 1;
    }
  } else {
    for (k = n; k < i + 1; k++) {
      finalMembers[k] = sortedMembers[i - k + n];
    }
  }
}

//뿌리기
for (i = 0; i < finalMembers.length; i++) {
  cardContainer.insertAdjacentHTML("beforeend", cardContent);
  const rankContent = document.querySelectorAll(".rank");
  const nameContent = document.querySelectorAll(".name");
  const countContent = document.querySelectorAll(".count");
  const timeContent = document.querySelectorAll(".time");
  rankContent[i].insertAdjacentHTML("beforeend", i + 1);
  nameContent[i].insertAdjacentHTML("beforeend", `${finalMembers[i].name}`);
  countContent[i].insertAdjacentHTML(
    "beforeend",
    `${finalMembers[i].count}` + " 개"
  );
  timeContent[i].insertAdjacentHTML("beforeend", `${finalMembers[i].time}`);
}

// Buttons
const mainBtn = document.getElementById("main-btn");
const navigateToMain = () => {
  window.location.href = "/main.html";
};

mainBtn.addEventListener("click", navigateToMain);
