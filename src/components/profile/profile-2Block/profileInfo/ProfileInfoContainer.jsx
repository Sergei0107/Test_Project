import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {updateInfo} from "../../../../redux/profileInfo-reducer";

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profileInfo
    }
};

export default connect(mapStateToProps,{updateInfo})(ProfileInfo);