import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
export default function Page() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-4 ">
            <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome Back!</h1>
            <p className="text-base text-[#7e8ca0]">
              Log in to get back to your finance dashboard
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
              <SignIn
                path="/sign-in"
                forceRedirectUrl={"/"}
                appearance={{
                  elements: {
                    formButtonPrimary: {
                      backgroundColor: "rgb(37 99 235)",
                      boxShadow: "0px 0px 2px #fff",
                    },
                  },
                }}
              />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
        <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
          <Image src="/logo.svg" height={100} width={100} alt="logo" />
        </div>
      </div>
    </>
  );
}
