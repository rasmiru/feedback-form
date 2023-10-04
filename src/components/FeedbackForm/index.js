import { Component } from 'react'
import HappinessPicker from '../HappinessPicker'
import './index.css'

class FeedbackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodRating: null,
            serviceRating: null,
            valueRating: null,
        }
    }

    render() {
        // Handler function for updating the rating state
        const onChangeHandler = (index, happinessPickerName) => {
            this.setState(prevState => ({
                ...prevState, // Spread the previous state to retain other properties
                [happinessPickerName]: index  // Update the specific property. [] is required for adding a dynamic variable (happinessPickerName) as key.
            }));
        }

        // Destructure rating values from the state
        const { foodRating, serviceRating, valueRating } = this.state

        return (
            <>
                <h1 className='rating-header'>Let us know how we did!</h1>
                <p className='rating-title'>Food</p>
                <HappinessPicker happinessPickerName={'foodRating'} currentSelection={foodRating} onChangeHandler={onChangeHandler} />
                <p className='rating-title'>Service</p>
                <HappinessPicker happinessPickerName={'serviceRating'} currentSelection={serviceRating} onChangeHandler={onChangeHandler} />
                <p className='rating-title'>Value for money</p>
                <HappinessPicker happinessPickerName={'valueRating'} currentSelection={valueRating} onChangeHandler={onChangeHandler} />
                {/* Display the total score */}
                <h1>Total Score: {foodRating + serviceRating + valueRating}/12</h1>
            </>
        )
    }
}

export default FeedbackForm
