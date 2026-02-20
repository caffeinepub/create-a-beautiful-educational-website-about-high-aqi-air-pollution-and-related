import { useState, useEffect } from 'react';

const VERIFICATION_KEY = 'airhealth_robot_verified';

export function useRobotVerification() {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check sessionStorage on mount
    try {
      const stored = sessionStorage.getItem(VERIFICATION_KEY);
      if (stored === 'true') {
        setIsVerified(true);
      }
    } catch (error) {
      console.error('Failed to read verification state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const markVerified = () => {
    try {
      sessionStorage.setItem(VERIFICATION_KEY, 'true');
      setIsVerified(true);
    } catch (error) {
      console.error('Failed to persist verification state:', error);
      // Still mark as verified in memory even if storage fails
      setIsVerified(true);
    }
  };

  return {
    isVerified,
    isLoading,
    markVerified,
  };
}
