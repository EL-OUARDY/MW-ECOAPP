namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DropColorSizeStatusFromProduct : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "OnSale", c => c.Boolean(nullable: false));
            DropColumn("dbo.Products", "Color");
            DropColumn("dbo.Products", "Size");
            DropColumn("dbo.Products", "Status");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Status", c => c.String(nullable: false));
            AddColumn("dbo.Products", "Size", c => c.String());
            AddColumn("dbo.Products", "Color", c => c.String(nullable: false));
            DropColumn("dbo.Products", "OnSale");
        }
    }
}
