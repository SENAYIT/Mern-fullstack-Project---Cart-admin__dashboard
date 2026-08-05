export default function Search() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-start justify-center gap-1">
        <p>nameInput search</p>
        <div className="flex items-center gap-2">
          <p>customer</p>
          <p>start_date</p>
          <p>end_date</p>
        </div>
      </div>
      <p>filter</p>
    </div>
  );
}
