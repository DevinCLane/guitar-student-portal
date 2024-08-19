import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default async function Home() {
    let session = await auth();
    let user = session?.user?.email;

    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-8 bg-gradient-to-r from-indigo-500">
            <h1>Guitar Student Portal</h1>
            <section>
                {user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}
            </section>
        </main>
    );
}
