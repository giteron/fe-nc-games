import { useReviews, useSingleUser } from "../../hooks/useApi";

const TopReviewer = () => {
    const { reviewsList, isLoading } = useReviews(null, 1000);
    const justOwners = reviewsList.map(review => review.owner)
    // console.log(justOwners)

    const countReviewsByOwner = (reviews) => {
        const finalTally = {};
        reviews.forEach(owner => {
            finalTally[owner] = (finalTally[owner] || 0) + 1;
        });
        return finalTally;
    };

    const ownersCounts = countReviewsByOwner(justOwners);
    // console.log(ownersCounts)

    const getTopReviewer = (countObj) => {
        const values = Object.values(countObj);
        const max = Math.max.apply(Math, values);
        for (const key in countObj) {
            if (countObj[key] === max) {
                return {
                    [key]: max
                };
            };
        };
    };

    const topOwner = getTopReviewer(ownersCounts);
    // const topUsername = Object.keys(topOwner);
    console.log(topOwner)

    // const { singleUser } = useSingleUser()
    // console.log(Object.keys(topOwner)[0])
    // console.log(topOwnerDetails)

    // console.log(review_id, '------- this is the review ID')

    if (isLoading) return <h4 className="MainContent-content">Loading...</h4>
    return (
        <div>
            {/* <li className="userSpotlight-card">
                 <h3>Top Reviewer</h3>
                 <br></br>
                 <div id="userSpotlight-img">
                 <img src={singleUser.avatar_url} alt={singleUser.username} />
                 </div>
                 <div id="spotlightDetails">
                     <p>Name: <span id="userInfo">{singleUser.name}</span></p>
                     <p>Username: <span id="userInfo">{singleUser.username}</span></p>
                 </div>
             </li> */}
        </div>
    );
};

export default TopReviewer;