const express = require('express')
const app = express()
const users = [
    {
        name: "vamsi",
        kidneys: [
            {
                healthy: false
            }
        ]
    }
]
app.use(express.json())
app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    let healthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidneys = healthyKidneys + 1
        }
    }
    const unhealthyKidneys = numberOfKidneys - healthyKidneys
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'Done'
    })
})
app.put('/', (req, res) => {
    users.map((user) => {
        user.kidneys.map((health) => health.healthy = true)
    })
    res.json({
        msg: 'Done'
    })
})
app.delete('/', (req, res) => {
    const newkidneys = []
    users.map((user) => {
        user.kidneys.map((health) => {
            if (health.healthy) {
                newkidneys.push({
                    healthy: true
                })
            }
        })
    })
    users[0].kidneys = newkidneys
    res.json({ msg: 'Done' })
})
app.listen(3000)
