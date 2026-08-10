type Props = {
  children: React.ReactNode;
};

export default function DetailLayout({ children }: Props) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">{children}</div>
  );
}
