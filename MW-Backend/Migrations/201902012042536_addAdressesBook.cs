namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addAdressesBook : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons");
            DropIndex("dbo.Products", new[] { "CouponLibel" });
            CreateTable(
                "dbo.Address_Book",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 50),
                        LastName = c.String(nullable: false, maxLength: 50),
                        Phone = c.String(nullable: false, maxLength: 50),
                        Country = c.String(nullable: false, maxLength: 20),
                        City = c.String(nullable: false, maxLength: 20),
                        Zip = c.Byte(nullable: false),
                        Line1 = c.String(nullable: false, maxLength: 100),
                        Line2 = c.String(maxLength: 100),
                        Line3 = c.String(maxLength: 100),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
            AlterColumn("dbo.Products", "CouponLibel", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Products", "CouponLibel");
            AddForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons", "Libel", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons");
            DropForeignKey("dbo.Address_Book", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Products", new[] { "CouponLibel" });
            DropIndex("dbo.Address_Book", new[] { "User_Id" });
            AlterColumn("dbo.Products", "CouponLibel", c => c.String(maxLength: 128));
            DropTable("dbo.Address_Book");
            CreateIndex("dbo.Products", "CouponLibel");
            AddForeignKey("dbo.Products", "CouponLibel", "dbo.Coupons", "Libel");
        }
    }
}
