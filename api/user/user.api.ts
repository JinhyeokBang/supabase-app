import { createClient } from "@/utils/supabase/client";

export class UserApi {
  private static supabase = createClient();
  
  static async loadUser() {
    const { data, error } = await UserApi.supabase.auth.getUser();
    if (error) {
      throw error;
    }
    return data;
  }
}
