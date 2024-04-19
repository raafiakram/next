import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const fetchPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Blog = async () => {
  const posts = await fetchPostData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
