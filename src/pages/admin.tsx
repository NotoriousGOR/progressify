import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Role } from '@prisma/client'


const Page: NextPage = () => {
  const { data: session } = useSession();
  const role: Role = 'ADMIN'


  if (session && role === Role.ADMIN) {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page!</h1>
      </div>
    );
  }
};

export default Page;
