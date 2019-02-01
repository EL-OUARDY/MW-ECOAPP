namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addSiblingscolorsize : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Product_Sibling",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Products", "Color", c => c.String(nullable: false));
            AddColumn("dbo.Products", "Size", c => c.String(nullable: false));
            AddColumn("dbo.Products", "ProductSiblingId", c => c.Int(nullable: false));
            AlterColumn("dbo.Products", "Slug", c => c.String(nullable: false, maxLength: 60));
            CreateIndex("dbo.Products", "ProductSiblingId");
            AddForeignKey("dbo.Products", "ProductSiblingId", "dbo.Product_Sibling", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "ProductSiblingId", "dbo.Product_Sibling");
            DropIndex("dbo.Products", new[] { "ProductSiblingId" });
            AlterColumn("dbo.Products", "Slug", c => c.String(nullable: false, maxLength: 50));
            DropColumn("dbo.Products", "ProductSiblingId");
            DropColumn("dbo.Products", "Size");
            DropColumn("dbo.Products", "Color");
            DropTable("dbo.Product_Sibling");
        }
    }
}
