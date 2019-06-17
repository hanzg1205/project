import React, { useState, useEffect } from "react";
import { connect } from "dva";

function AddUser(props) {
    useEffect(()=>{

    },[]);
    return <div className="user-wrapper">用户添加</div>
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