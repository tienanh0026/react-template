export default function EngagementLoading() {
  return (
    <>
      <div className="flex h-9 w-full items-center justify-between rounded-xl bg-[#F8F8F8] px-4 py-2 text-sm font-medium">
        <p>Populating entities...</p>
        <p>3s </p>
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-43 w-full"
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
