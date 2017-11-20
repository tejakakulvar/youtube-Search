import React from 'react'
import Videolistitem from './videolistitem'

const Videolist = (props) => {
  const items = props.list1.map((list) => {
   return <Videolistitem onclickvideo={props.onclickvideo} key = {list.etag} video = {list}/>;
  });
  return (
    <div>
      <ul className="col-md-6 list-group">
         {items}
      </ul>
    </div>
  );
};

export default Videolist;

//
