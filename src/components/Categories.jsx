import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/useApi.js';

const Categories = (props) => {
    const { categoriesList, isLoading } = useCategories();

    if (isLoading) return <h2 class="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <ul>
                {categoriesList.map(category => {
                    return (
                        <Link to={`/categories/${category.slug}`} >
                            <li key={category.slug}>
                                <h2 className="category-title">{category.slug.replace(/-/g, ' ')}</h2>
                                <p>{category.description}</p>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;