const MainContent = (props) => {
    const { children } = props;

    return (
        <div className="MainContent-container">
            <p>MainContent</p>
            <p>{children}</p>
        </div>
    );
};

export default MainContent;