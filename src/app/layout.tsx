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
      <body>
        <Navbar />
        <div className="flex flex-row">
          <LeftNavigation />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
