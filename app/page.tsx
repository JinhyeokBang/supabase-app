"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@mui/material";

const supabase = createClient();

const Index = () => {
  const logInWithKakao = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
    if (error) throw error.message;
    console.log(data);
  };
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
    <div>
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
          { user && `user email: ${user.email}` }
      </div>
      {
        user == null && <div className="h-full flex justify-center items-center">
          <Button variant="contained" onClick={logInWithKakao}>just click me</Button>
        </div>
      }
    </div>
  );
}

export default Index;
