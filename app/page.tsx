export default function Home() {
  return (
    <main className="p-10">
      <h1 className="font-display text-6xl font-bold">Your Name</h1>
      <p className="mt-4 text-lg">Websites, slides and ads.</p>
      <div className="mt-8 flex gap-3">
        <div className="size-16 rounded-xl bg-rose" />
        <div className="size-16 rounded-xl bg-raspberry" />
        <div className="size-16 rounded-xl bg-plum" />
      </div>
    </main>
  );
}