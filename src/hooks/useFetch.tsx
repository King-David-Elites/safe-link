// hooks/useFetch.ts

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import customFetch from '@/lib/customFetch';

export function useFetch() {
  const router = useRouter();

  const fetch = useCallback(async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    try {
      return await customFetch.fetch<T>(url, options);
    } catch (error) {
      if (error instanceof Response) {
        if (error.status === 401) {
          // Clear the token
          if (typeof window !== 'undefined') {
            localStorage.removeItem('accessToken');
          }
          // Navigate to login page
          await router.push('/login');
        }
        // You can handle other status codes here if needed
      }
    //   throw error;
    }
  }, [router]);

  return { fetch };
}