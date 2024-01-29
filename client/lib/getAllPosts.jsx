
export default async function getAllPosts() {
  const result = await fetch("http://localhost:4000/blogs", { cache: 'no-store' });

  return result.json();
};
