namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addOrdersOrderItems : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Order_Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Quantity = c.Byte(nullable: false),
                        Status = c.String(nullable: false, maxLength: 20),
                        Shipping = c.String(nullable: false, maxLength: 20),
                        Order_Id = c.Int(),
                        Product_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Orders", t => t.Order_Id)
                .ForeignKey("dbo.Products", t => t.Product_Id)
                .Index(t => t.Order_Id)
                .Index(t => t.Product_Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date_Placed = c.DateTime(nullable: false),
                        Status = c.String(nullable: false, maxLength: 20),
                        Payment = c.String(nullable: false, maxLength: 20),
                        GrandTotal = c.Decimal(nullable: false, precision: 18, scale: 2),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Order_Item", "Product_Id", "dbo.Products");
            DropForeignKey("dbo.Order_Item", "Order_Id", "dbo.Orders");
            DropForeignKey("dbo.Orders", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Orders", new[] { "User_Id" });
            DropIndex("dbo.Order_Item", new[] { "Product_Id" });
            DropIndex("dbo.Order_Item", new[] { "Order_Id" });
            DropTable("dbo.Orders");
            DropTable("dbo.Order_Item");
        }
    }
}
