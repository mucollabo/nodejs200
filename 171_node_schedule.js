const schedule = require('node-schedule');

// 특정 시간에 한 번
// 2022년 5월 5일 오후 21시 50분에 수행할 작업
const date = new Date(2022, 4, 5, 21, 59, 0);

// 2022-5-5T21:46:00.000Z (GMT 0 기준)
console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule();
rule.minute = 32;

const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

// 작업 취소
// j.cancel();
// k.cancel();
