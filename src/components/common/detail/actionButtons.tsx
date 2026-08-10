type Props = {
  children: React.ReactNode;
};

// const colors = {
//   blue: "bg-blue-600 hover:bg-blue-700",
//   red: "bg-red-600 hover:bg-red-700",
//   green: "bg-green-600 hover:bg-green-700",
//   yellow: "bg-yellow-500 hover:bg-yellow-600",
// };

export default function ActionButtons({ children }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:justify-end">
      {children}
    </div>
  );
}
