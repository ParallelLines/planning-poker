export default function ControlButtons({ isHidden }) {
    return (
        <div className="control-btns">
            {
            isHidden ? 
            <button id="reveal-btn" className="usual-btn" name="reveal results">reveal results</button> 
            :
            <button id="new-round-btn" className="usual-btn" name="start new round">start new round</button>            
            }
        </div>
    )
}