import { useState } from 'react';
import { postComment } from '../api.js';


const CreateComment = (props) => {
    const { signedInUser, review_id } = props;
    const [ hasPosted, setHasPosted ] = useState (false);
    // const [ newCommentId, setnewCommentId ] = useState(0);
    const [ newComment, setNewComment ] = useState({
        username: signedInUser.username,
        body: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        setHasPosted(true);
        postComment(newComment, review_id)
        .then(() => {
            setNewComment({
                username: signedInUser.username,
                body: ''
            });
            setHasPosted(false);
        })
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        setNewComment((currComment) => {
            const updatedComment = { ...currComment };
            updatedComment[name] = value;
            return updatedComment;
        });
    };


    return (
        <li className="createReview-card">
            <form onSubmit={handleSubmit}>
        <label>
            <input
                        name="body"
                        placeholder="Write a comment..."
                        value={newComment.body}
                        onChange={handleInputChange}
                    />
            </label>
                <p>{`Posting as ${signedInUser.username}`}</p>
                {
                hasPosted ? <h4>Posting...</h4> : 
                <button type="submit">Post</button>
                }              
            </form>        
        </li>
    );
};

export default CreateComment;