import RootShell, { rootMetadata } from "../components/RootShell";

export const metadata = rootMetadata;

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en-US">{children}</RootShell>;
}
