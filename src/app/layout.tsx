import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import LeftNavigation from '@/components/leftNavigation/LeftNavigation';

export const metadata = {
  title: 'Twitch Stats - HOME',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f8] dark:bg-[#0e0e10]">
        <Navbar />
        <div className="flex flex-row">
          <LeftNavigation />
          <div className="flex flex-col justify-center w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
