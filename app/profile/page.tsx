"use client";

import { Tables } from "@/database.types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const supabase = createClient();

const SignIn = () => {
  const [profile, setProfile] = useState<Tables<'profiles'> | null>();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data.user != null) {
      console.log(data.user.id);
      const profile = await supabase
        .from('profiles')
        .select()
        .limit(1)
        .maybeSingle();
      setProfile(profile.data);
    }
  }
  
  return (
    <div className="h-full flex justify-center items-center">
      { JSON.stringify(profile) }
    </div>
  );
};
 
export default SignIn;
