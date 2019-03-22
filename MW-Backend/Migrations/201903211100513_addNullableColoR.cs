namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addNullableColoR : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Color", c => c.String());
            AddColumn("dbo.Product_Variations", "Date_Added", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Product_Variations", "Date_Added");
            DropColumn("dbo.Products", "Color");
        }
    }
}
