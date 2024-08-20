import { signOut } from "@/auth";
import { Button } from "./ui/button";

export function SignOut({ children }: { children: React.ReactNode }) {
    return (
        <form
            className="flex flex-col items-center p-4 gap-4 text-2xl"
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
            }}
        >
            <p>{children}</p>
            <Button type="submit">Sign Out</Button>
        </form>
    );
}
