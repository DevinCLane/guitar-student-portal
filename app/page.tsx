import { DM_Serif_Text } from "next/font/google";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

const font = DM_Serif_Text({
    subsets: ["latin"],
    weight: ["400"],
});

export default async function Home() {
    let session = await auth();
    let user = session?.user?.name;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8 bg-gradient-to-r from-rose-100 to-teal-100">
            <section className="space-y-6 text-center">
                <h1
                    className={cn(
                        "text-6xl font-semibold text-black drop-shadow-md",
                        font.className
                    )}
                >
                    ⚡️ Music Student Portal
                </h1>
                <div>
                    {user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}
                </div>
            </section>
        </main>
    );
}
