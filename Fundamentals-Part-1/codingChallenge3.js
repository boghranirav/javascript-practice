const teamDolphins = (101 + 108 + 98) / 3;
const teamKoals = (97 + 89 + 103) / 3;

console.log(teamDolphins, teamKoals);
if (teamDolphins === teamKoals && teamDolphins >= 100 && teamKoals >= 100) {
    console.log(`Match is draw. Avg of both team is ${teamDolphins}`);
}
else if (teamDolphins > teamKoals && teamDolphins >= 100) {
    console.log(`Dolphins win the match with avg score ${teamDolphins}.`);
}
else if (teamKoals > teamDolphins && teamKoals >= 100) {
    console.log(`Koals win the match with avg score ${teamKoals}`);
} else {
    console.log(`No team wins the trophy!`);
}
