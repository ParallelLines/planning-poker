import { PieChart } from 'react-minimal-pie-chart'
import { pastel } from './ColorPalletes'

export default function Result({ votes }) {
    const noVoteStr = '😴'

    const data = votes.reduce((acc, curr) => {
        let found = false
        for (let obj of acc) {
            if (obj.title === curr || (curr === null && obj.title === noVoteStr)) {
                found = true
                obj.value += 1
                break
            }
        }
        if (!found) {
            acc.push({ title: curr === null ? noVoteStr : curr, value: 1, color: pastel[acc.length] })
        }
        return acc
    }, [])

    data.sort((a, b) => a.value - b.value)

    return (
        <div className="pi-chart">
            <PieChart
                data={data}
                label={data => data.dataEntry.title + ' (' + data.dataEntry.value + ')'}
                labelPosition={70}
                animate
                animationDuration={400}
                animationEasing="ease-out"
                startAngle={90}
            />
        </div>
    )
}