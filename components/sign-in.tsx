import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
            }}
        >
            <Button variant="default" size="lg" type="submit">
                Signin with Google
            </Button>
        </form>
    );
}
