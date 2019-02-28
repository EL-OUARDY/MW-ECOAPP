namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class recreateOrderItemTab : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Order_Item",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Quantity = c.Byte(nullable: false),
                        Status = c.String(nullable: false, maxLength: 20),
                        Shipping = c.String(nullable: false, maxLength: 20),
                        Order_Id = c.Int(nullable: false),
                        Product_Id = c.Int(nullable: false),
                        Order_Id1 = c.Int(),
                        Product_Id1 = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Orders", t => t.Order_Id1)
                .ForeignKey("dbo.Products", t => t.Product_Id1)
                .Index(t => t.Order_Id1)
                .Index(t => t.Product_Id1);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Order_Item", "Product_Id1", "dbo.Products");
            DropForeignKey("dbo.Order_Item", "Order_Id1", "dbo.Orders");
            DropIndex("dbo.Order_Item", new[] { "Product_Id1" });
            DropIndex("dbo.Order_Item", new[] { "Order_Id1" });
            DropTable("dbo.Order_Item");
        }
    }
}
