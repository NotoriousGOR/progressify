import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Role } from '@prisma/client'
import { log } from 'next-axiom'


const Page: NextPage = () => {
  const { data: session } = useSession();

  if (session && session.user?.role === Role.ADMIN) {
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
