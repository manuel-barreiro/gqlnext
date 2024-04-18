import { ApolloWrapper } from "@/lib/apollo/apolloWrapper";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloWrapper>
      {children}
    </ApolloWrapper>
  );
}


export default layout