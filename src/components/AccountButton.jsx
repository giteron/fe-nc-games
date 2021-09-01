const AccountButton = (props) => {
    const { signedInUser } = props;

    return (
        <div className="AccountButton-container">
            <section className="userDetails">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="the user" />
                <p>{signedInUser ? signedInUser : 'Sign In'}</p>
           </section>
        </div>
    );
};

export default AccountButton;