import { use } from "react";

// Next 13 updated feature

// 1. new getServerSideProps
const listCustomers = async () => {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "force-cache", // < SSG getStaticSideProps
    // cache: "no-store", // < SSR GetServerSideProps
    // next: {
    // revalidate: 20, // < ISR revalidate on every 20 second
    // },
  });
  return posts.json();
};


// 2. new getStaticSideProps
const findPost = async (id) => {
  let post = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`);
  return post.json();
};

const newFetchData = async () => {
  // let { customers } = use(listCustomers()); or

  const posts = await listCustomers(); // call new getServerSideProps

  console.log(customers);

  return <div>Enter</div>;
};

export default newFetchData;
