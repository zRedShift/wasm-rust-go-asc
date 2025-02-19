function measureTime(times, func) {
    document.writeln("<div>measure time START</div>")

    let start = performance.now()
    let tick = performance.now()
    for (let i = 0; i < times; i++) {
        func()
        document.writeln("<div>" + "measure time tick " + String(i) + " :> " + String(Math.round(performance.now() - tick)) + "ms" + "</div>")
        tick = performance.now()
    }
    let total = performance.now() - start
    document.writeln("<div>" + "measure time END, average:> " + Math.round(total / times) + "ms" + "</div>")
}

function testSort() {
    const arr = new Array(100_000)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.random()
    }
    const temp = new Array(100_000)
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < arr.length; j++) {
            temp[j] = arr[j]
        }
        temp.sort()
    }
}

measureTime(5, () => testSort())
