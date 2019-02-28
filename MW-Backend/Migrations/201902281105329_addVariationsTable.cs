namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addVariationsTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Product_Variations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Label = c.String(nullable: false),
                        Value = c.String(nullable: false),
                        HasImage = c.Boolean(nullable: false),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Products", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Product_Variations", "ProductId", "dbo.Products");
            DropIndex("dbo.Product_Variations", new[] { "ProductId" });
            DropTable("dbo.Product_Variations");
        }
    }
}
