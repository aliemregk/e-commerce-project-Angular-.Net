using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Security.Hashing
{
    public class HashingHelper
    {
        public static void CreatePasswordHash(string password, out string passwordHash)
        {
            passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
        }

        public static bool VerifyPasswordHash(string password, string passwordHash)
        {
            if (BCrypt.Net.BCrypt.Verify(password, passwordHash))
            {
                return true;
            }
            return false;
        }
    }
}
