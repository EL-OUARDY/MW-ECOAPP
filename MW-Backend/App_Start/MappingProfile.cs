using AutoMapper;
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.DTO_Resourses;
using MW_Backend.Models;
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
            Mapper.CreateMap<CategoryRessource, Category>();
            Mapper.CreateMap<SubCategoryRessource, SubCategory>();

            Mapper.CreateMap<Category, CategoryListDTO>();
            Mapper.CreateMap<SubCategory, SubCategoryListDTO>();

            Mapper.CreateMap<Category, CategoryDTO>();
            Mapper.CreateMap<SubCategory, SubCategoryDTO>();

            Mapper.CreateMap<ApplicationUser, UsersListVM>();

            Mapper.CreateMap<Product, miniProductDTO>();
            Mapper.CreateMap<miniProductDTO, Product>();

            Mapper.CreateMap<Product, ProductListVM>()
                .ForMember(dist => dist.CategoryId, opt => opt.MapFrom(src => src.SubCategory.CategoryId));
            Mapper.CreateMap<ProductListVM, Product>();

            Mapper.CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.CategoryId, opt => opt.MapFrom(src => src.SubCategory.CategoryId));
            Mapper.CreateMap<ProductDTO, Product>();

            Mapper.CreateMap<ApplicationUser, UserProfileResourse>();
            Mapper.CreateMap<UserProfileResourse, ApplicationUser>();

            Mapper.CreateMap<Variant, VariantDTO>();
            Mapper.CreateMap<VariantResource, Variant>();

            Mapper.CreateMap<Product, ProductVariantsVM>();
        }
    }
}