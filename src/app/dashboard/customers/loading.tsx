export default function Loading({ text }: { text: string }) {
  return (
    <div className="h-72 flex items-center justify-center">
      <p> {text} </p>
    </div>
  );
}
