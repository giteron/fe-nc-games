const MainContent = (props) => {
    const { children } = props;

    return (
        <div className="MainContent-container">
            <p className="MainContent-content">MainContent</p>
            {children}
        </div>
    );
};

export default MainContent;