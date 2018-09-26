import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';

class Review extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const {number, name, time, stars, text} = this.props;
        return (
            <div style={styles.outline}>
                <FontAwesomeIcon icon='user'/>
                <div>
                    <p>{text}</p>
                    <section>
                        <span>Customer #{number}</span> {name} | Completed {time}
                        <StarRatingComponent
                            starCount={5}
                            value={stars}
                        />
                    </section>

                </div>
            </div>
        );
    }
}

const styles = {
    outline: {
        border: '1px solid black'
    }
};

export default Review