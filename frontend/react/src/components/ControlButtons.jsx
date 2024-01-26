export default function ControlButtons({ isHidden, onReveal, onStart }) {
    return (
        <div className="control-btns">
            {isHidden && <button onClick={onReveal} id="reveal-btn" className="usual-btn" name="reveal results">reveal results</button>}
            {!isHidden && <button onClick={onStart} id="new-round-btn" className="usual-btn" name="start new round">start new round</button>}
        </div>
    )
}