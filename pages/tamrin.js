import Link from "next/link";
import React from "react";
import Users from "./users";

function tamrin({ data }) {
  console.log(data);
  return (
    <div>
      {/* {data.map((post) => (
        <li key={post.id}>
          <Link href={`/users/${post.id}`}>{post.title}</Link>
        </li>
      ))} */}
      {/* <Users users={data} /> */}
    </div>
  );
}

export default tamrin;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
