function UserDetails({ data }) {
  console.log(data);
  return <div>{data.name}</div>;
}

export default UserDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((i) => ({
    params: {
      userId: i.id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
