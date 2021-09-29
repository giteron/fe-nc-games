import { useState } from 'react';
import { patchVotes } from '../api.js';

const Votes = (props) => {
    const { votes, component_id, path } = props;
    const [voteChange, setVoteChange] = useState(0);
    const [ hasVotedUp, setHasVotedUp ] = useState(false);
    const [ currentVotes, setCurrentVotes ] = useState(0);

    const incrementVotes = () => {
        patchVotes(path, component_id, 1)
            .then(setVoteChange(currVoteChange => {
                return currVoteChange + 1
            })
        );
        setCurrentVotes(curr => curr + 1);
    };

    const decrementVotes = () => {
        patchVotes(path, component_id, -1)
            .then(setVoteChange(currVoteChange => {
                return currVoteChange - 1
            })            
        );
        setCurrentVotes(curr => curr - 1);
    };

    return (
        <div id="votesComponent">
            <button id="upvoteButton" disabled={currentVotes > 0} onClick={incrementVotes}>+</button>
            <p><span id="voteCount">{votes + voteChange}</span> {`${votes + voteChange === 1 ? 'vote' : 'votes'}`}</p>
            <button id="downvoteButton" disabled={currentVotes < 0} onClick={decrementVotes}>-</button>
        </div>
    );
};

export default Votes;