namespace TechZoneAPI.Data
{
    public class DataConstants
    {
        public class Common
        {
            public const int IdMaxLength = 40;
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
    }
}
