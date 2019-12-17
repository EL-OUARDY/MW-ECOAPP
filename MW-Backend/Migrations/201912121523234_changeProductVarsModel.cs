namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeProductVarsModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Product_Variations", "Price", c => c.Int());
            AddColumn("dbo.Product_Variations", "Image", c => c.String());
            AddColumn("dbo.Product_Variations", "Last_Update", c => c.DateTimeOffset(precision: 7));
            DropColumn("dbo.Product_Variations", "Value");
            DropColumn("dbo.Product_Variations", "HasImage");
            DropColumn("dbo.Product_Variations", "Date_Added");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Product_Variations", "Date_Added", c => c.DateTime());
            AddColumn("dbo.Product_Variations", "HasImage", c => c.Boolean(nullable: false));
            AddColumn("dbo.Product_Variations", "Value", c => c.String(nullable: false));
            DropColumn("dbo.Product_Variations", "Last_Update");
            DropColumn("dbo.Product_Variations", "Image");
            DropColumn("dbo.Product_Variations", "Price");
        }
    }
}
