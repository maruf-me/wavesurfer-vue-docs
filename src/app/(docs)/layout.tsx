import DocsLayout from '@/layouts/DocsLayout';

const RootDocsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => <DocsLayout>{children}</DocsLayout>

export default RootDocsLayout;
