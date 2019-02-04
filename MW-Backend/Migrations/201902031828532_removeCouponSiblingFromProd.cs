namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeCouponSiblingFromProd : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons");
            DropForeignKey("dbo.Products", "ProductSiblingId", "dbo.Product_Sibling");
            DropIndex("dbo.Products", new[] { "ProductSiblingId" });
            DropIndex("dbo.Products", new[] { "CouponLibel" });
            AlterColumn("dbo.Products", "CouponLibel", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "CouponLibel", c => c.String(maxLength: 128));
            CreateIndex("dbo.Products", "CouponLibel");
            CreateIndex("dbo.Products", "ProductSiblingId");
            AddForeignKey("dbo.Products", "ProductSiblingId", "dbo.Product_Sibling", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons", "Libel");
        }
    }
}
