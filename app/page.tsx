

import React from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';


export default function Home() {
  const {userId} = auth();

  if (userId) {
    redirect('/home');
  }

  return (
    <div>
      
        <h1>The Folding Company</h1>

        <Link href="/home/sign-in">
        <button>Log In</button>
        </Link>
        
        <Link href="/home/sign-up">
        <button>Sign Up</button>
        </Link>
        
        
  
    </div>
  )
}
         