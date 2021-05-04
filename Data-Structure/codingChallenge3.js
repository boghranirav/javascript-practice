/*
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL
*/

"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, " 🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, " 🔁 Substitution"],
  [64, " 🔶 Yellow card"],
  [69, " 🔴 Red card"],
  [70, " 🔁 Substitution"],
  [72, " 🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, " 🔶 Yellow card"],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const totalEvents = gameEvents.size;
const totalTime = [...gameEvents.keys()].pop();
console.log(
  `Aneventhappened,on average, every ${totalTime / totalEvents} minutes`
);

//4
for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[First Half] ${key}: ${value}`)
    : console.log(`[Second Half] ${key}: ${value}`);
}
