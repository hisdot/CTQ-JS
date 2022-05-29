const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek[4]); //array
daysOfWeek.push("new");
console.log(daysOfWeek);

const Dubai = ["potato", "tamato", "pizza"];
Dubai.push("kimbab"); //인덱스는 0부터 시작
console.log(Dubai[2]);
console.log(Dubai.length);

const player = {
    name: 'hisdot',
    points: 100,
    fat: true,
};
console.log(player);
console.log(player.name); //this is 객체

player.strength = 'strong';
console.log(player.strength);

player.points = player.points + 230;
console.log(player.points);