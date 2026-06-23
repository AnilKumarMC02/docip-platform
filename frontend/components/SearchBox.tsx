type Props = {
  searchType: string;
  searchValue: string;

  setSearchType: (value: string) => void;

  setSearchValue: (value: string) => void;

  onSearch: () => void;
};

export default function SearchBox({
  searchType,
  searchValue,
  setSearchType,
  setSearchValue,
  onSearch,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="border rounded-lg p-3 md:w-52"
      >
        <option value="mobile">Mobile Number</option>

        <option value="driverId">Driver ID</option>
      </select>

      <input
        type="text"
        value={searchValue}
        placeholder={
          searchType === "mobile" ? "Enter mobile number" : "Enter driver ID"
        }
        onChange={(e) => setSearchValue(e.target.value)}
        className="border rounded-lg p-3 flex-1"
      />

      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
