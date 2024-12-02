
'use client'
import { useSession } from 'next-auth/react';

function MyComponent() {
  const { data: session } = useSession();

  if (session) {
    console.log('Access Token:', session.accessToken);
  }

  return (
    <div>
      <p>Signed in as {session?.user?.email}</p>
    </div>
  );
}

export default MyComponent;