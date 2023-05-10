import './globals.css';
import Navbar from '@/components/navbar/Navbar';

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
        {children}
      </body>
    </html>
  );
}
