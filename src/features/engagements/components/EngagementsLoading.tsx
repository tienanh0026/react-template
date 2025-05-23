export default function EngagementLoading() {
  return (
    <>
      <div className="w-full h-9 bg-[#F8F8F8] flex justify-between items-center px-4 py-2 text-sm font-medium rounded-xl">
        <p>Populating entities...</p>
        <p>3s </p>
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[172px]"
            style={{
              background:
                'linear-gradient(312.37deg, #FFFFFF 8.05%, #E8E8E8 94.37%)',
            }}
          />
        ))}
      </div>
    </>
  );
}
