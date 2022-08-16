import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { Navbar, Button, Form, Input, Dropdown } from "react-daisyui";
import { RiUser5Fill } from "react-icons/ri";

import ImagePlaceHolder from "../components/ImagePlaceHolder";

export default function Header() {
  const { data: session } = useSession();
  const isLoggedIn = session?.user;

  return (
    <div className="flex w-full p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1">
          <Button className="text-xl normal-case" color="ghost">
            Progressify
          </Button>
        </div>
        <div className="flex-none gap-2">
          <Form>
            <Input bordered type="text" placeholder="Search" />
          </Form>
          <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                {isLoggedIn && session.user?.image ? (
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    blurDataURL={ImagePlaceHolder(237, 181, 6)}
                    layout="intrinsic"
                    alt="image"
                  />
                ) : (
                  <RiUser5Fill />
                )}
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              {isLoggedIn ? (
                <li>
                  <a href="/profile" className="justify-between">
                    Profile
                  </a>

                  <a onClick={() => signOut({ callbackUrl: "/" })}>Logout</a>
                </li>
              ) : (
                <li>
                  <a onClick={() => signIn()} className="justify-between">
                    Login
                  </a>
                </li>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}
