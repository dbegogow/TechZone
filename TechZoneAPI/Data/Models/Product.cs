﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Common;
using static TechZoneAPI.Data.DataConstants.Product;

namespace TechZoneAPI.Data.Models
{
    public class Product
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [MaxLength(ModelMaxLength)]
        public string Model { get; set; }

        [Required]
        public string BrandId { get; set; }

        public Brand Brand { get; set; }

        public int Price { get; set; }

        public int? Delivery { get; set; }

        public string Description { get; set; }

        public bool IsArchive { get; set; }

        public bool IsDeleted { get; set; }

        [Required]
        public string CategoryId { get; set; }

        public Category Category { get; set; }

        public ICollection<Feature> Features { get; init; } = new HashSet<Feature>();

        public ICollection<Image> Images { get; init; } = new HashSet<Image>();
    }
}
