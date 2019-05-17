using AutoMapper;
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.DTOs;
using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<Product, mProductDTO>();
            Mapper.CreateMap<mProductDTO, Product>();

            Mapper.CreateMap<Product, ProductListVM>();
            Mapper.CreateMap<ProductListVM, Product>();

            Mapper.CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.CategoryId, opt => opt.MapFrom(src => src.SubCategory.CategoryId));
            Mapper.CreateMap<ProductDTO, Product>();

            Mapper.CreateMap<UserProfile, UserProfileDTO>();
            Mapper.CreateMap<UserProfileDTO, UserProfile>();

            

        }
    }
}