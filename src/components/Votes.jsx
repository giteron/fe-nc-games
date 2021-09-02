import { useState } from 'react';
import { patchVotes } from '../api.js';

const Votes = (props) => {
    const { votes, review_id } = props;
    const [voteChange, setVoteChange] = useState(0);
    const [ hasVoted, setHasVoted ] = useState(false);

    const incrementVotes = () => {
        patchVotes(review_id, 1)
            .then(setVoteChange(currVoteChange => {
                return currVoteChange + 1
            })
        );
        setHasVoted(true);
    };

    const decrementVotes = () => {
        patchVotes(review_id, -1)
            .then(setVoteChange(currVoteChange => {
                return currVoteChange - 1
            })            
        );
        setHasVoted(true)
    };

    return (
        <div id="votesComponent">
            <button disabled={hasVoted} onClick={incrementVotes}>+</button>
            <p><span id="voteCount">{votes + voteChange}</span> votes</p>
            <button disabled={hasVoted} onClick={decrementVotes}>-</button>
        </div>
    );
};

export default Votes;