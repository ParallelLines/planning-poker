export default function Participants() {
    return (
        <aside className="participants">
            <div className="title">
                <div className="progressbar"></div>
                <button id="show-participants-btn" className="svg-btn toggle-btn" name="toggle participants" data-target="collapsible-participants-list">
                    <svg className="switch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path d="M18,12L10,12L10,16L14,16L10,16L10,20L12,20L12,28L16,28L16,20L18,20L18,12ZM0,20L2,20L2,28L6,28L6,20L8,20L8,12L0,12L0,20ZM26,24L22,24L22,28L26,28L26,24ZM28,20L28,12L20,12L20,20L22,20L22,24L26,24L26,20L28,20ZM6,6L2,6L2,10L6,10L6,6ZM16,6L12,6L12,10L16,10L16,6ZM26,6L22,6L22,10L26,10L26,6ZM12,-0L8,-0L8,4L12,4L12,-0ZM20,-0L16,-0L16,4L20,4L20,-0Z" />
                    </svg>
                    <svg className="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M2,12L0,12L0,14L2,14L2,12ZM14,12L12,12L12,14L14,14L14,12ZM4,10L2,10L2,12L4,12L4,10ZM12,10L10,10L10,12L12,12L12,10ZM6,8L4,8L4,10L6,10L6,8ZM10,8L8,8L8,10L10,10L10,8ZM8,6L6,6L6,8L8,8L8,6ZM6,4L4,4L4,6L6,6L6,4ZM10,4L8,4L8,6L10,6L10,4ZM2,2L2,0L0,0L0,2L2,2L2,4L4,4L4,2L2,2ZM12,2L10,2L10,4L12,4L12,2ZM14,-0L12,-0L12,2L14,2L14,-0Z" />
                    </svg>
                </button>
                <div className="vote-counter">
                    <span className="did-vote">7</span>/26
                </div>
            </div>
            <div id="collapsible-participants-list" className="scrollable-col collapsible" data-toggler="show-participants-btn">
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">WWWWWWWWWWWWWWWWWWWW
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 26" width="15" hight="15">
                            <path d="M2,24L2,6L0,6L0,26L30,26L30,6L28,6L28,24L2,24ZM12,14L12,8L10,8L10,12L8,12L8,10L6,10L6,14L8,14L8,16L10,16L10,14L12,14ZM18,8L18,14L20,14L20,16L22,16L22,14L24,14L24,10L22,10L22,12L20,12L20,8L18,8ZM6,10L6,6L4,6L4,10L6,10ZM26,10L26,6L24,6L24,10L26,10ZM18,6L16,6L16,8L18,8L18,6ZM14,6L12,6L12,8L14,8L14,6ZM0,6L4,6L4,4L0,4L0,6ZM18,4L16,4L16,6L18,6L18,4ZM30,4L26,4L26,6L30,6L30,4ZM14,4L12,4L12,6L14,6L14,4ZM26,4L30,4L30,2L26,2L26,4ZM4,2L0,2L0,4L4,4L4,2ZM16,2L14,2L14,4L16,4L16,2ZM2,0L0,0L0,2L2,2L2,0ZM16,0L14,0L14,2L16,2L16,0ZM30,0L28,0L28,2L30,2L30,0Z" style={{ fill: "rgb(255,178,0)" }} />
                        </svg>
                    </span>
                    <span className="result">100</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">BBBBBBBBBB</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">CCCCCCCCCC</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">DDDDDDDDDD</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">EEEEEEEEEE</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">FFFFFFFFFF</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">GGGGGGGGGG</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">HHHHHHHHHH</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">IIIIIIIIII</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">JJJJJJJJJJ</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">KKKKKKKKKK</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">LLLLLLLLLL</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator voted"></span>
                    <span className="participant-name">MMMMMMMMMM</span>
                    <span className="result">...</span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">NNNNNNNNNN</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">OOOOOOOOOO</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">PPPPPPPPPP</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">QQQQQQQQQQ</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">RRRRRRRRRR</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">SSSSSSSSSS</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">TTTTTTTTTT</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">UUUUUUUUUU</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">VVVVVVVVVV</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">WWWWWWWWWW</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">XXXXXXXXXX</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">YYYYYYYYYY</span>
                    <span className="result"></span>
                </div>
                <div className="participant">
                    <span className="vote-indicator"></span>
                    <span className="participant-name">ZZZZZZZZZZ</span>
                    <span className="result"></span>
                </div>
            </div>
        </aside>
    )
}