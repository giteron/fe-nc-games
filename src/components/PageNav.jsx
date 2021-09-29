const PageNav = ({category}) => {
    return (
        <div>
            {/* title */}
            <h4>Reviews for <span>{category ? category.replace(/-/g, ' ') : 'all'}</span> Games</h4>
            {/* any sort queries */}
            <select name="sort">
                <option value="created_at">Date Created</option>
                <option value="votes">Votes</option>
                <option value="title">Review Title</option>
            </select>
            {/* any order queries */}
            <select>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </select>
        </div>
    );
};

export default PageNav;