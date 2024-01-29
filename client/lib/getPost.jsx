
export default async function getAllPosts(id) {
  const result = await fetch(`http://localhost:4000/blogs/${id}`, { cache: 'no-store' });

  return result.json();
};
