import { useState } from 'react';

const CreateReview = (props) => {
    const { signedInUser } = props;

    const [newReview, setNewReview] = useState({
        owner: signedInUser,
        title: '',
        review_body: '',
        designer: '',
        category: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newReview)
        // post the form with useApi...
        /* setList((currList) => {
             return [newItem, ...currList];
         }); */
        // reset the input to be empty
        // setNewItem('');
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        setNewReview((currReview) => {
            const updatedReview = { ...currReview };
            updatedReview[name] = value;
            return updatedReview;
        })
    }


    return (
        <div className="MainContent-content">
            <p>Writing a new review...</p>
            <p>Takes owner, title, review_body, designer, category</p>
            <p>Returns above plus votes, created_at, comment_count</p>

            <li>
            <form onSubmit={handleSubmit}>
                <p>{`Posting as ${signedInUser}`}</p>
                <label>
                    <input
                        name="title"
                        placeholder="Review Title..."
                        value={newReview.title}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <input
                        name="review_body"
                        placeholder="Review Body..."
                        value={newReview.review_body}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <input
                        name="designer"
                        placeholder="Game Creator..."
                        value={newReview.designer}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <input
                        name="category"
                        placeholder="Game category..."
                        value={newReview.category}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Post</button>
            </form>
            </li>
        </div>
    );

};

export default CreateReview;

/*
"POST /api/reviews/": {
    "description": "adds a new review object and serves that newly-posted review object with an auto-generated review_id, plus vote count/timestamp/comment count",
    "queries": [

    ],
    "exampleRequest": {
      "owner": "happyamy2016",
      "title": "My review for [game title]",
      "review_body": "This is a great game to play with friends!",
      "designer": "Leslie Scott",
      "category": "dexterity"
    },
    "exampleResponse": {
      "comment": {
        "owner": "happyamy2016",
        "title": "My review for [game title]",
        "review_body": "This is a great game to play with friends!",
        "designer": "Leslie Scott",
        "category": "dexterity",
        "review_id": 26,
        "votes": 0,
        "created_at": "2021-08-07T21:57:49.666Z",
        "comment_count": 0
      }
    }
  } */