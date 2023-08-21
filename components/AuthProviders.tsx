"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

interface ProvidersProps {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
};

type AuthProvidersProps = Record<string, ProvidersProps>

const AuthProviders = () => {
    const [providers, setProviders] = useState<AuthProvidersProps | null>(null);

    useEffect(() => {
      const fetchProvider = async () => {
        const res = await getProviders();

        setProviders(res);
      }

      fetchProvider();
    }, []);
    

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: ProvidersProps, i) => (
                    <button key={i}>{provider.id}</button>
                ))}
            </div>
        );
    }
}
 
export default AuthProviders;