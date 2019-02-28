using AutoMapper;
using MW_Backend.DTOs;
using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.Helpers
{
    public class CartHelper
    {
        public static List<CartItem> getValidCart(CartItem[] PostedCart)
        {
            List<CartItem> Cart = new List<CartItem>();
            CartItem cartItem;

            using (var db = new ApplicationDbContext())
            {
                foreach (var item in PostedCart)
                {
                    var p = db.Products.Find(item.Product.Id);
                    if (p != null && item.Quantity > 0)
                    {
                        cartItem = new CartItem
                        {
                            Product = Mapper.Map<mProductDTO>(p),
                            Quantity = item.Quantity
                        };

                        if (!Cart.Exists(x => x.Product.Id == cartItem.Product.Id))
                        {
                            Cart.Add(cartItem);
                        }
                    }
                }

                return Cart;
            }
        }
    }
}