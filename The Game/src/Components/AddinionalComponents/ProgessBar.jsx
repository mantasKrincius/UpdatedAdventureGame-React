const ProgressBar = ({bgcolor, expBar, hpBar, mpBar}) => {


    const fillerStyles = {
        height: '100%',
        width: `${hpBar}%`,
        backgroundColor: bgcolor,
        borderRadius: "20px",
    }

    const expStyles = {
        height: '100%',
        width: `${expBar}%`,
        backgroundColor: bgcolor,
        borderRadius: '20px',
    }

    const mpStyle = {
        height: '100%',
        width: `${mpBar}%`,
        backgroundColor: bgcolor,
        borderRadius: '20px',
    }

    return (
        <div style={{width: "100%"}}>
            <div style={{backgroundColor: "red", borderRadius: "20px"}}>
                <div style={fillerStyles}>
                    <span>{hpBar}</span>
                </div>
            </div>
            <div style={{backgroundColor: "yellow", borderRadius: "20px", margin: "10px", color: "black"}}>
                <div style={expStyles}>
                    <span>{expBar}</span>
                </div>
            </div>
            <div style={{backgroundColor: "lightBlue", borderRadius: "20px", margin: "10px"}}>
                <div style={mpStyle}>
                    <span>{mpBar}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
