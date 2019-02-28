namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropSiblingsTable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Products", "ProductSiblingId");
            DropTable("dbo.Product_Sibling");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Product_Sibling",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Products", "ProductSiblingId", c => c.Int(nullable: false));
        }
    }
}
