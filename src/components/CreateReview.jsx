import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { postReview } from '../api.js';
import { useCategories } from '../hooks/useApi.js';
import { UserContext } from '../UserContext.jsx';

const CreateReview = () => {
    const { signedInUser } = useContext(UserContext);
    const { categoriesList, isLoading } = useCategories();
    const [ hasPosted, setHasPosted ] = useState (false);
    const [ newReviewId, setnewReviewId ] = useState(0);
    const [ newReview, setNewReview ] = useState({
        owner: signedInUser.username,
        title: '',
        review_body: '',
        designer: '',
        category: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasPosted(true);
        postReview(newReview)
        .then(({review_id}) => {
            setnewReviewId(review_id);
        });
    };

    const handleRedirect = () => {
        if(newReviewId) {
            return <Redirect to={`/reviews/${newReviewId}`} />
        };
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
            {handleRedirect()}
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
                {
                hasPosted ? <h3>Posting...</h3> : 
                <button type="submit">Post</button>
                }
            </form>
            </li>
        </div>
    );
};

export default CreateReview;
