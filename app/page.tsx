import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <p>
      <UserButton afterSignOutUrl="/" />
    </p>
  );
}
