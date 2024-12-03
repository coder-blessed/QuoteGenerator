import { StyleSheet, Text, View } from 'react-native';
import '@/app/styles/globals.css';

export const metadata = {
  title: 'Random Quote Generator',
  description: 'Generate and share inspiring quotes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
