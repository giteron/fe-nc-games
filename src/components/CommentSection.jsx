import { useState } from "react";
import { useComments } from "../hooks/useApi";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import Expandable from "./Expandable";


const CommentSection = (props) => {
    const { review_id, comment_count } = props;
    const { commentsList, setCommentsList, isLoading, setPage } = useComments(review_id);
    const [ commentCount, setCommentCount ] = useState(comment_count);


    return (
        <div>
          <CreateComment 
            review_id={review_id} 
            setCommentsList={setCommentsList}
            setCommentCount={setCommentCount}
            />
            <li className="commentsSection">
                <h3>{`Comments: ${commentCount}`}</h3>
                <Expandable>
                    <Comments 
                        comment_count={commentCount}
                        setCommentCount={setCommentCount}
                        commentsList={commentsList}    
                        setCommentsList={setCommentsList}
                        isLoading={isLoading}
                        setPage={setPage}
                    />
                </Expandable>
            </li>  
        </div>
    );
};

export default CommentSection;