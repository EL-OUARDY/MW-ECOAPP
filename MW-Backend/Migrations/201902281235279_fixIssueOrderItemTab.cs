namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fixIssueOrderItemTab : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Order_Item", "Order_Id1", "dbo.Orders");
            DropForeignKey("dbo.Order_Item", "Product_Id1", "dbo.Products");
            DropIndex("dbo.Order_Item", new[] { "Order_Id1" });
            DropIndex("dbo.Order_Item", new[] { "Product_Id1" });
            RenameColumn(table: "dbo.Order_Item", name: "Order_Id1", newName: "OrderId");
            RenameColumn(table: "dbo.Order_Item", name: "Product_Id1", newName: "ProductId");
            AlterColumn("dbo.Order_Item", "OrderId", c => c.Int(nullable: false));
            AlterColumn("dbo.Order_Item", "ProductId", c => c.Int(nullable: false));
            CreateIndex("dbo.Order_Item", "OrderId");
            CreateIndex("dbo.Order_Item", "ProductId");
            AddForeignKey("dbo.Order_Item", "OrderId", "dbo.Orders", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Order_Item", "ProductId", "dbo.Products", "Id", cascadeDelete: true);
            DropColumn("dbo.Order_Item", "Order_Id");
            DropColumn("dbo.Order_Item", "Product_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Order_Item", "Product_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Order_Item", "Order_Id", c => c.Int(nullable: false));
            DropForeignKey("dbo.Order_Item", "ProductId", "dbo.Products");
            DropForeignKey("dbo.Order_Item", "OrderId", "dbo.Orders");
            DropIndex("dbo.Order_Item", new[] { "ProductId" });
            DropIndex("dbo.Order_Item", new[] { "OrderId" });
            AlterColumn("dbo.Order_Item", "ProductId", c => c.Int());
            AlterColumn("dbo.Order_Item", "OrderId", c => c.Int());
            RenameColumn(table: "dbo.Order_Item", name: "ProductId", newName: "Product_Id1");
            RenameColumn(table: "dbo.Order_Item", name: "OrderId", newName: "Order_Id1");
            CreateIndex("dbo.Order_Item", "Product_Id1");
            CreateIndex("dbo.Order_Item", "Order_Id1");
            AddForeignKey("dbo.Order_Item", "Product_Id1", "dbo.Products", "Id");
            AddForeignKey("dbo.Order_Item", "Order_Id1", "dbo.Orders", "Id");
        }
    }
}
