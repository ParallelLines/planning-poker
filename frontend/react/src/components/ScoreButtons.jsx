export default function ScoreButtons() {
    return (
        <div className="poker-btns">
            <button className="poker-btn" name="0">0</button>
            <button className="poker-btn" name="0.5">0.5</button>
            <button className="poker-btn" name="1">1</button>
            <button className="poker-btn" name="2">2</button>
            <button className="poker-btn" name="3">3</button>
            <button className="poker-btn" name="5">5</button>
            <button className="poker-btn" name="8">8</button>
            <button className="poker-btn" name="13">13</button>
            <button className="poker-btn" name="20">20</button>
            <button className="poker-btn selected" name="40">40</button>
            <button className="poker-btn" name="100">100</button>
            <button className="poker-btn" name="don't know">?</button>
        </div>
    )
}