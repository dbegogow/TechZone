using Microsoft.EntityFrameworkCore.Metadata;

namespace TechZoneAPI.Data
{
    public class DataConstants
    {
        public class Common
        {
            public const int IdMaxLength = 40;
        }

        public class User
        {
            public const int NameMinLength = 2;
            public const int NameMaxLength = 30;

            public const int EmailMaxLength = 100;
            public const int PasswordMaxLength = 64;

            public const int PhoneNumberMaxLength = 13;

            public const int AddressNameMinLength = 5;
            public const int AddressNameMaxLength = 150;
        }

        public class Product
        {
            public const int ModelMinLength = 3;
            public const int ModelMaxLength = 40;
        }

        public class Brand
        {
            public const int NameMinLength = 3;
            public const int NameMaxLength = 30;
        }

        public class Feature
        {
            public const int TextMinLength = 2;

            public const int NameMaxLength = 25;
            public const int ValueMaxLength = 40;
        }

        public class Category
        {
            public const int NameMaxLength = 30;
            public const int NameMinLength = 2;
        }

        public class Question
        {
            public const int TitleMaxLength = 100;
            public const int TitleMinLength = 10;
        }

        public class City
        {
            public const int NameMinLength = 2;
            public const int NameMaxLength = 30;
        }
    }
}
