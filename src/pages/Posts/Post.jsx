import React from "react";
import { Link, useParams } from "react-router-dom";

const fakeData = [
  {
    id: 1,
    title: "svsobjoSB one",
    body: "svdspijp one",
  },
  {
    id: 2,
    title: "svsobjoSB two",
    body: "svdspijp two",
  },
  {
    id: 3,
    title: "svsobjoSB three",
    body: "svdspijp three",
  },
];
const Post = () => {
  const { id } = useParams();
  const data = fakeData.find((item) => item.id === Number(id));
  return (
    <div>
      <p>title : {data.title}</p>
      <p>body : {data.body}</p>
      <Link to='/app/posts'>go back</Link>
    </div>
  );
};

export default Post;
