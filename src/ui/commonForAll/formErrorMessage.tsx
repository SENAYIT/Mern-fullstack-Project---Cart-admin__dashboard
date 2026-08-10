export default function FormErrorMessage({ text }: { text: string }) {
  return <p className="mt-2 text-sm text-red-500">{text}</p>;
}
