namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropProductVariants : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Product_Variations", "ProductId", "dbo.Products");
            DropIndex("dbo.Product_Variations", new[] { "ProductId" });
            DropTable("dbo.Product_Variations");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Product_Variations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Label = c.String(nullable: false),
                        Value = c.String(nullable: false),
                        Price = c.Int(),
                        Image = c.String(),
                        Last_Update = c.DateTimeOffset(precision: 7),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.Product_Variations", "ProductId");
            AddForeignKey("dbo.Product_Variations", "ProductId", "dbo.Products", "Id", cascadeDelete: true);
        }
    }
}
