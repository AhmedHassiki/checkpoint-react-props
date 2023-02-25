import x from "./hi.svg"
import propTypes from "prop-types";

const Profile = ({fullName, bio, profession}) => {
    const styleObject = {color: "#e015a3"}
    const styleObject1 = {background: "white", textdecoration:"none"}
    const HandleName = (e) => {
        e.preventDefault();
        alert(fullName);
    };
    return (
    <>
        <div style={styleObject}>
            <h1> Full Name : {fullName} </h1>
            <h1>Biography : {bio} </h1>
            <h1>Profession : {profession} </h1>
            <img src={x} alt="logogomycode" />
            <br />
            <a href="/" onClick={HandleName} style={styleObject1}> Click to see the Full Name </a>
            <br />
        </div>
    </>
    );
};

Profile.propTypes= {
    fullName : propTypes.string.isRequired,
    bio : propTypes.string.isRequired,
    profession : propTypes.string.isRequired
};

export default Profile;

