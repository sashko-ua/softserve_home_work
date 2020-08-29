// Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.
// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
// example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:
// result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.
// If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'

// Examples:
// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'

'use strict';

console.log('Task One');

const rooms = [
        ['XX', 2],
        ['XXXX', 6],
        ['XXXXX', 4]
    ],
    needChairs = 4;

const numRoms = rooms.length;
let canTake = [];

howManyCanTake()

function howManyCanTake() {
    for (let i = 0, j = 0, k = 1; i < numRoms; i++) {
        rooms[i][j] = rooms[i][j].length; //отримує кі-ть людей в кімнати

        canTake[i] = rooms[i][k] - rooms[i][j]; //Скальки можна забрати стільців з кімнати

        if (canTake[i] < 0) { //якщо стільців менше ніж людей
            canTake[i] = 0
        }
    }
}

console.log(canTake)

const canTakeTotal = canTake.reduce((acc, el) => acc + el); //загальна кількість стільців, що можна взяти

if (canTakeTotal == needChairs || canTakeTotal > needChairs) { //перевірка чи достатньо
    console.log('Стільців достатньо')
} else {
    console.log('Стільців не достатньо');
}

console.log('');