
export default async function getPost(id) {
  const result = await fetch(`http://localhost:4000/blogs/${id}`, { cache: 'no-store' });

  return result.json();
};
