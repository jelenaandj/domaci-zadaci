function divisibleByFive(arr) {
    arr.forEach(element => {
        if (element % 5 === 0) {
            console.log(element)
        }
    });
}

divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5])



function lifeSupply(numPerMonth, age) {
    return (numPerMonth * 12) * (100 - age);

}

lifeSupply(10, 26)
console.log(lifeSupply(10, 26))