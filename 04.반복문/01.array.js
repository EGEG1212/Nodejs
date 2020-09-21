let array = [52, 273.1, '아침밥', '점심밥', true, false];
console.log(array.length); //6
console.log(array); //모두 출력

console.log(array[2], array[3]); //아침밥,점심밥
array[0] = 0;
console.log(array); 

//element 추가 
array[6] = 'new item';
console.log(array);
array.push('push');
console.log(array);

for (let i=0; i<array.length; i++){
    console.log(array[i], typeof(array[i]));
}

//Enhanced For Loop 더 간결
for (let item of array) {
    console.log(item, typeof(item));
}