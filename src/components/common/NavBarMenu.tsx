import Navigation from './Navigation';

export default function NavBarMenu({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  return (
    <div>
      <div className={`fixed top-[56px] z-50 w-[950px]`}>
        <div className="relative">
          {/* Blur background */}
          <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-[10px]" />

          <div
            className={`flex h-full w-full shrink-0 items-center justify-between ${
              padding ? `${padding}` : 'py-4'
            }`}
          >
            <Navigation />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
