import {connect} from "react-redux";
import Interests from "./Interests";
import {addInterest,removeElement} from "../../../../redux/interests-reducer";

const mapStateToProps = (state) => {
    return {
        interests: state.interests
    }
};

export default connect(mapStateToProps,{addInterest,removeElement})(Interests);