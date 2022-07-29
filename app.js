const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]


const displayEachData = () => {
    const chart = document.getElementById('charts')
    data.forEach((d) => {
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `
<div class="container-chart">

<div class="amount" id="${d.day}" style="height: ${d.amount * 3}px;"><div class="tooltip"> <p> $ ${d.amount} </p></div></div> 
</div>

<p>${d.day}</p> `
        newDiv.setAttribute("class", "chart" + " " + d.day)
        chart.appendChild(newDiv)
    })
}


displayEachData()

