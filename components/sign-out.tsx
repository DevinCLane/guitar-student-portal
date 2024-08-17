import { signOut } from "@/auth";

export function SignOut({ children }: { children: React.ReactNode }) {
    return (
        <form
            className="flex flex-col items-center p-4 gap-2"
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
            }}
        >
            <p>{children}</p>
            <button type="submit">Sign Out</button>
        </form>
    );
}
