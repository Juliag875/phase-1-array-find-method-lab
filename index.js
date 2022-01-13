// code your solution here
function superbowlWin(record) {
 const superWin = record.find((record) => record.result === "W");
    if (superWin === undefined) {
        return undefined;
    } else {
        return superWin.year;
    }
}