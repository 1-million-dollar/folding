import {
    ClerkProvider,
    
    SignedIn,
    
    UserButton,
  } from '@clerk/nextjs';
  

export default function Layout({children} : {children: React.ReactNode}) {
    return(
        <ClerkProvider>
            <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
            {children}
        </div>
        </ClerkProvider>
        
    )
}