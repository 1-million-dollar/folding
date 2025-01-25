"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Page() {
    const { isLoaded, userId, sessionId } = useAuth();
    const { isSignedIn, user } = useUser();

    if (!isLoaded || !userId || !isSignedIn) {
        return null;
    }
    
    return(
        <h1>
            Hello {user?.firstName}, {userId} your currnet active session is {sessionId}
        </h1>
    );
}