import React, { useEffect } from "react";
import { connect } from "dva";

function AddUser(props) {
    useEffect(()=>{

    },[]);
    return <div className="exam-wrapper">
        <h2 className="user-title">试卷列表</h2>
    </div>
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
    
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);