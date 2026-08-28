import RootShell, { rootMetadata } from "../components/RootShell";

export const metadata = rootMetadata;

export default function SpanishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es-US">{children}</RootShell>;
}
