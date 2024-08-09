import SignIn from "@/components/sign-in";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-8">
            <h1>Guitar Student Portal</h1>
            <SignIn />
        </main>
    );
}
