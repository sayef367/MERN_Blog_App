
export default function Home() {
  const blog = [
    {
      userId: 1,
      id: 1,
      title: '1st blog title',
      body: 'This is 1st blog body'
    },
    {
      userId: 2,
      id: 2,
      title: '2nd blog title',
      body: 'This is 2nd blog body'
    },
    {
      userId: 3,
      id: 3,
      title: '3rd blog title',
      body: 'This is 3rd blog body'
    }
  ];
  return (
    <main className="container">
      <h1 className="text-center">Hello to the Blog page</h1>
      <div className="card">
        <div className="card-body">
          This is some text within a card body.
        </div>
      </div>
    </main>
  );
}
