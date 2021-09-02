import { useReviews } from '../hooks/useApi.js';

const ManageReviews = (props) => {
    const { signedInUser } = props;
    const { reviewsList, isLoading } = useReviews();
    const thisUsersReviews = reviewsList.filter(review => {
        return review.owner === signedInUser.username;
    })

    if (isLoading) return <h4>Loading...</h4>
    return (
        <section>
            {thisUsersReviews.map(review => {
                return (
                    <section className="manageContent-card">
                        <section id="manageContent-details">
                        <img 
                            id="manageContent-img"src={review.review_img_url} 
                            alt={review.title}
                        />
                        <h4>{review.title}</h4>
                        <p>{new Date(review.created_at).toLocaleDateString()}</p>
                        </section>
                        <section className="manageContent-options"> 
                        <button>Delete</button>
                        </section>
                    </section>
                )
            })}
        </section>
    );
};

export default ManageReviews;