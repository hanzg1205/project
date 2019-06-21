import React from 'react';
import { Link } from 'dva/router';
export default ()=>{
  return <div className="other-img">
    <Link to="/"><img src="404.jpg" alt=""/></Link>  
  </div>
}
