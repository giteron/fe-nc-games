import { useState } from 'react';
import { postReview } from '../api.js';
import { useCategories } from '../hooks/useApi.js';

const CreateReview = (props) => {
    const { signedInUser } = props;
    const { categoriesList, isLoading } = useCategories();
    
    const [newReview, setNewReview] = useState({
        owner: signedInUser.username,
        title: '',
        review_body: '',
        designer: '',
        category: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newReview);
        postReview(newReview);
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
        });
    };

    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            {/* <p>Writing a new review...</p>
            <p>Takes owner, title, review_body, designer, category</p>
            <p>Returns above plus votes, created_at, comment_count</p> */}

            <li className="createReview-card">
                <h2>Write a new review</h2>
            <form onSubmit={handleSubmit}>
                <p>{`Posting as ${signedInUser.username}`}</p>
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
                        name="designer"
                        placeholder="Game Creator..."
                        value={newReview.designer}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                <select 
                    name="category"
                    onChange={handleInputChange}
                    className="createReview-card__categories"
                    defaultValue="selected">
                    <option key="categorySelector" value="selected" disabled hidden>Game Category...</option>
                    <option key="noCategory" value="">none</option>
                    {categoriesList.map(category => {
                        return (
                            <option 
                                key={category.slug}
                                value={category.slug}>
                                {category.slug.replace(/-/g, ' ')}
                            </option>
                            )
                        })};
                </select>
                </label>
                <label >
                    <textarea className="createReview-card__body"
                        name="review_body"
                        placeholder="Review Body..."
                        value={newReview.review_body}
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