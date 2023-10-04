import { Component } from 'react'
import './index.css'

class HappinessPicker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // Array of emoji scores
        const emojiScores = ['😦', '😞', '😐', '🙂', '😁']
        const { happinessPickerName, currentSelection, onChangeHandler } = this.props

        return (
            <div className='emoji-container'>
                {/* Map through each emoji score and render it as a span. */}
                {/* span because it is an inline element and will render side by side in the sameline. Div will render in a newline)*/}
                {emojiScores.map((emoji, index) => (
                    <span
                        key={index}
                        onClick={() => onChangeHandler(index, happinessPickerName)}
                        // Apply CSS class based on whether it is selected or not
                        className={currentSelection === index ? 'emoji selected-emoji' : 'emoji'}
                    >
                        {emoji}
                    </span>
                ))}
            </div>
        )
    }
}

export default HappinessPicker
