"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

const supabase = createClient();

const Index = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log(data);
    console.error(error);
    setUser(data.user);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        { user == null ? 'login needed' : 'already logined' } <br/>
        { user && `id: ${user.id}, email: ${user.email}` }
    </div>
  );
}

export default Index;
