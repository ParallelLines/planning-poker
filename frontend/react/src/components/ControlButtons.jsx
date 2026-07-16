export default function ControlButtons({ isHidden, onReveal, onStart }) {
    return (
        <div className="control-btns">
            <button onClick={onReveal} id="reveal-btn" className="usual-btn" name="reveal results" disabled={!isHidden}>reveal results</button>
            <button onClick={onStart} id="new-round-btn" className="usual-btn" name="start new round" disabled={isHidden}>start new round</button>
        </div>
    )
}