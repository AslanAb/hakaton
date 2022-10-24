let sheeps = ['Овечка 1', 'Овечка 2', 'Овечка 3', 'Овечка 4', 'Овечка 5', 'Овечка 6', 'Овечка 7', 'Овечка 8', 'Овечка 9', 'Овечка 10']

let zagon1 = document.querySelector('.zagon_1')
let zagon2 = document.querySelector('.zagon_2')
let zagon3 = document.querySelector('.zagon_3')
let zagon4 = document.querySelector('.zagon_4')
console.log(zagon1)
let countOfDays = document.querySelector('.countOfDays')
let otchet = document.querySelector('.otchet')

let sumOfDays = 0

let zagon1Arr = []
let zagon2Arr = []
let zagon3Arr = []
let zagon4Arr = []

let minZagons = []
let maxZagons = []
let resultRandomZagon = []

pushAllSheeps()
correctSheepsInZagon()
writeResult()
setInterval(changesIn1Day, 10000)
setInterval(killOneSheep, 100000)

function pushAllSheeps() {
    for (let i = 0; i <= sheeps.length - 1; i++) {
        let n = Math.floor(Math.random() * 4 + 1)
        if (n == 1) {
            zagon1Arr.push(sheeps[i])
        } else if (n == 2) {
            zagon2Arr.push(sheeps[i])
        } else if (n == 3) {
            zagon3Arr.push(sheeps[i])
        } else {
            zagon4Arr.push(sheeps[i])
        }
    }
}

function delAdd(item1, item2) {
    let addShip = item2.pop()
    item1.push(addShip)
}

function maxCount() {
    let countsArr = [zagon1Arr.length, zagon2Arr.length, zagon3Arr.length, zagon4Arr.length]
    let max = Math.max(...countsArr)
    if (zagon1Arr.length == max) {
        return zagon1Arr
    } else if (zagon2Arr.length == max) {
        return zagon2Arr
    } else if (zagon3Arr.length == max) {
        return zagon3Arr
    } else {
        return zagon4Arr
    }
}

function minCount() {
    let countsArr = [zagon1Arr.length, zagon2Arr.length, zagon3Arr.length, zagon4Arr.length]
    let min = Math.min(...countsArr)
    if (zagon1Arr.length == min) {
        return zagon1Arr
    } else if (zagon2Arr.length == min) {
        return zagon2Arr
    } else if (zagon3Arr.length == min) {
        return zagon3Arr
    } else {
        return zagon4Arr
    }
}

function correctSheepsInZagon() {
    let zagons = [zagon1Arr, zagon2Arr, zagon3Arr, zagon4Arr]
    for (let i = 0; i <= zagons.length - 1; i++) {
        if (zagons[i].length == 0) {
            delAdd(zagons[i], maxCount())
            delAdd(zagons[i], maxCount())
        } else if (zagons[i].length == 1) {
            delAdd(zagons[i], maxCount())
        }
    }
}

function addInner(arr, item) {
    for (let i = 0; i <= arr.length - 1; i++) {
        item.innerHTML += `<span>${arr[i]}</span>`
    }
}

function writeResult() {
    addInner(zagon1Arr, zagon1)
    addInner(zagon2Arr, zagon2)
    addInner(zagon3Arr, zagon3)
    addInner(zagon4Arr, zagon4)
}

function add1Sheep(arr, item) {
    sheeps.push(`Овечка ${sheeps.length + 1}`)
    arr.push(sheeps[sheeps.length - 1])
    item.innerHTML += `<span>${sheeps[sheeps.length - 1]}</span>`
}

function minZagonsFn() {
    minZagons = []
    let countsArr = [zagon1Arr.length, zagon2Arr.length, zagon3Arr.length, zagon4Arr.length]
    let min = Math.min(...countsArr)
    if (zagon1Arr.length == min) {
        minZagons.push(1)
    }
    if (zagon2Arr.length == min) {
        minZagons.push(2)
    }
    if (zagon3Arr.length == min) {
        minZagons.push(3)
    }
    if (zagon4Arr.length == min) {
        minZagons.push(4)
    }
    if (minZagons.length == 4) {
        minZagons = 'нету'
    }
}

function maxZagonsFn() {
    maxZagons = []
    let countsArr = [zagon1Arr.length, zagon2Arr.length, zagon3Arr.length, zagon4Arr.length]
    let max = Math.max(...countsArr)
    if (zagon1Arr.length == max) {
        maxZagons.push(1)
    }
    if (zagon2Arr.length == max) {
        maxZagons.push(2)
    }
    if (zagon3Arr.length == max) {
        maxZagons.push(3)
    }
    if (zagon4Arr.length == max) {
        maxZagons.push(4)
    }
    if (maxZagons.length == 4) {
        maxZagons = 'нету'
    }
}

function changesIn1Day() {
    if (zagon1Arr.length > 1) {
        add1Sheep(zagon1Arr, zagon1)
        otchet.innerHTML += `<p class="p4">В загоне 1 появилась новая овечка!</p>`
    }
    if (zagon2Arr.length > 1) {
        add1Sheep(zagon2Arr, zagon2)
        otchet.innerHTML += `<p class="p4">В загоне 2 появилась новая овечка!</p>`
    }
    if (zagon3Arr.length > 1) {
        add1Sheep(zagon3Arr, zagon3)
        otchet.innerHTML += `<p class="p4">В загоне 3 появилась новая овечка!</p>`
    }
    if (zagon4Arr.length > 1) {
        add1Sheep(zagon4Arr, zagon4)
        otchet.innerHTML += `<p class="p4">В загоне 4 появилась новая овечка!</p>`
    }
    sumOfDays += 1
    countOfDays.textContent = sumOfDays
    let sumOfAllAliveSheeps = zagon1Arr.length + zagon2Arr.length + zagon3Arr.length + zagon4Arr.length
    let sumOfAllDeadSheeps = sheeps.length - sumOfAllAliveSheeps
    minZagonsFn()
    maxZagonsFn()
    otchet.innerHTML += `<p class="p3">Отчет за ${sumOfDays} день
                        <p class="p3">Общее количество овечек: ${sheeps.length}</p>
                        <p class="p3">Количество убитых овечек: ${sumOfAllDeadSheeps}</p>
                        <p class="p3">Количество живых овечек: ${sumOfAllAliveSheeps}</p>
                        <p class="p3">Номер самого населённого загона: ${maxZagons}</p>
                        <p class="p3">Номер самого менее населённого загона: ${minZagons}</p>
                        <p class="p3">________________________________________________</p>
                        `
}

function refreshZagon(arr, item) {
    item.innerHTML = ''
    for (let i = 0; i <= arr.length - 1; i++) {
        item.innerHTML += `<span>${arr[i]}</span>`
    }
}

let numberOfZagon = 0
function randomZagon() {
    numberOfZagon = Math.floor(Math.random() * 4 + 1)
    if (numberOfZagon == 1) {
        resultRandomZagon = [zagon1Arr, zagon1]
        return resultRandomZagon
    } else if (numberOfZagon == 2) {
        resultRandomZagon = [zagon2Arr, zagon2]
        return resultRandomZagon
    } else if (numberOfZagon == 3) {
        resultRandomZagon = [zagon3Arr, zagon3]
        return resultRandomZagon
    } else {
        resultRandomZagon = [zagon4Arr, zagon4]
        return resultRandomZagon
    }
}

function killOneSheep() {
    randomZagon()
    resultRandomZagon[0].pop()
    correctSheepsInZagon()
    refreshZagon(zagon1Arr, zagon1)
    refreshZagon(zagon2Arr, zagon2)
    refreshZagon(zagon3Arr, zagon3)
    refreshZagon(zagon4Arr, zagon4)
    otchet.innerHTML += `<p class="p4">Одна овечка из загона ${numberOfZagon} благополучно стала шашлыком</p>`
}

function clearAll() {
    zagon1Arr = []
    zagon2Arr = []
    zagon3Arr = []
    zagon4Arr = []
    zagon1.innerHTML = ''
    zagon2.innerHTML = ''
    zagon3.innerHTML = ''
    zagon4.innerHTML = ''
}

function refresh() {
    sheeps = ['Овечка 1', 'Овечка 2', 'Овечка 3', 'Овечка 4', 'Овечка 5', 'Овечка 6', 'Овечка 7', 'Овечка 8', 'Овечка 9', 'Овечка 10']
    clearAll()
    pushAllSheeps()
    correctSheepsInZagon()
    writeResult()
    sumOfDays = 0
    otchet.innerHTML = '<p class="p4">Мы полностью обновили загоны новыми 10 овцами, начинаем наблюдение с нуля</p>'
}

function killAllSheeps() {
    clearAll()
    otchet.innerHTML += '<p class="p4">У Вас намечается праздник? Все овечки были запущены на мясо!</p>'
}

function runCommand() {
    let inputValue = document.querySelector('.input').value
    if (inputValue == 'добавить овечку') {
        randomZagon()
        add1Sheep(resultRandomZagon[0], resultRandomZagon[1])
        otchet.innerHTML += `<p class="p4">Ура! В загоне ${numberOfZagon} новая овечка!</p>`
    } else if (inputValue == 'удалить овечку') {
        killOneSheep()
    } else if (inputValue == 'переместить овечку') {
        delAdd((randomZagon())[0], maxCount())
        refreshZagon(zagon1Arr, zagon1)
        refreshZagon(zagon2Arr, zagon2)
        refreshZagon(zagon3Arr, zagon3)
        refreshZagon(zagon4Arr, zagon4)
        otchet.innerHTML += `<p class="p4">Одна овечка перемещена в загон ${numberOfZagon}</p>`
    } else {
        alert('Введите только одно из следующих комманд:\n1) добавить овечку\n2) переместить овечку\n3) переместить овечку')
    }
}

