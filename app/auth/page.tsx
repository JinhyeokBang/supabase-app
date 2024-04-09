"use client";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const SignIn = () => {
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

  return (
    <div className="h-full flex justify-center items-center">
      <button onClick={logInWithKakao}>just click me</button>
    </div>
  );
};
 
export default SignIn;
