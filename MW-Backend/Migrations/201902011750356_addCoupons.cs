namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addCoupons : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Coupons",
                c => new
                    {
                        Libel = c.String(nullable: false, maxLength: 128),
                        value = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Expire_At = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Libel);
            
            AddColumn("dbo.Products", "CouponLibel", c => c.String(maxLength: 128));
            CreateIndex("dbo.Products", "CouponLibel");
            AddForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons", "Libel");
            DropColumn("dbo.Categories", "Sorting");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "Sorting", c => c.Byte(nullable: false));
            DropForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons");
            DropIndex("dbo.Products", new[] { "CouponLibel" });
            DropColumn("dbo.Products", "CouponLibel");
            DropTable("dbo.Coupons");
        }
    }
}
