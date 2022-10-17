using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Business.Constants
{
    public static class Messages
    {
        public static string Listed = "Listed successfully.";
        public static string ListingError = "Listing failed.";

        public static string Added = "Added successfully.";
        public static string AddingError = "Adding failed";

        public static string Deleted = "Deleted successfully.";
        public static string DeletingError = "Deleting failed.";

        public static string Updated = "Updated successfully.";
        public static string UpdatingError = "Updating failed.";

        public static string CategoryExists = "Category already exists.";
        public static string UserExists = "User already exists.";

        public static string AuthorizationDenied = "Auth denied.";
        public static string UserRegistered = "Registered.";
        public static string UserAlreadyExists = "User already exists.";
        public static string SuccessfulLogin = "Logged in.";
        public static string PasswordError = "Wrong Password.";
        public static string UserNotFound = "User not found.";
        public static string LoginError = "Token creation failed.";
        public static string PhotoExists = "Photo already exists.";
        public static string ProductExists = "Product already exists.";
        public static string CommentExists = "Cant not add more than one comment.";
    }
}
