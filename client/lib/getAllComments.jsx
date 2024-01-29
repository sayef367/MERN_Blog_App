
export default async function getAllComments() {
  const result = await fetch("http://localhost:4000/comments", { cache: 'no-store' });

  return result.json();
};
