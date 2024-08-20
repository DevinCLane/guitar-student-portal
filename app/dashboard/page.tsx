import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { cn } from "@/lib/utils";

export default async function DashboardPage() {
    let session = await auth();
    let user = session?.user?.name;

    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            <h1 className="text-6xl font-semibold font-['var(--dm-serif)']">
                Music Student Portal
            </h1>
            <section>
                {user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}
            </section>
        </main>
    );
}
